"use strict";

const TsconfigPaths = require("tsconfig-paths");
const getInnerRequest = require("enhanced-resolve/lib/getInnerRequest");
module.exports = class TsconfigAliasPlugin {
  //可传参configFile
  constructor(options = {}) {
    this.source = "described-resolve";
    this.target = "internal-resolve";
    //加载tsconfig文件
    const loadResult = TsconfigPaths.loadConfig(
      options.configFile || process.cwd()
    );
    this.absoluteBaseUrl = loadResult.absoluteBaseUrl;
    this.matchPath = TsconfigPaths.createMatchPathAsync(
      this.absoluteBaseUrl,
      loadResult.paths
    );
  }
  apply(resolver) {
    resolver
      .getHook(this.source)
      .tapAsync(
        { name: "TsconfigAliasPlugin" },
        (request, resolveContext, callback) => {
          const innerRequest = getInnerRequest(resolver, request);
          if (
            !innerRequest ||
            request?.request?.startsWith(".") ||
            request?.request?.startsWith("..")
          ) {
            return callback();
          }
          this.matchPath(
            innerRequest,
            (path, callback) => {
              resolver.fileSystem.readJson(path, (err, json) => {
                if (err || !json) {
                  callback();
                  return;
                }
                callback(undefined, json);
              });
            },
            (path, callback) => {
              resolver.fileSystem.stat(path, (err, stats) => {
                if (err) {
                  callback(undefined, false);
                  return;
                }
                callback(undefined, stats ? stats.isFile() : false);
              });
            },
            [".ts", ".tsx"],
            (err, foundMatch) => {
              if (err) {
                return callback(err);
              }
              if (!foundMatch) {
                return callback();
              }
              const newRequest = Object.assign(Object.assign({}, request), {
                request: foundMatch,
                path: this.absoluteBaseUrl,
              });
              return resolver.doResolve(
                resolver.getHook(this.target),
                newRequest,
                `mapping '${innerRequest}' to '${foundMatch}' `,
                resolveContext,
                (err, result) => {
                  if (err) return callback(err);
                  if (result) return callback(null, result);
                  return callback();
                }
              );
            }
          );
        }
      );
  }
};
