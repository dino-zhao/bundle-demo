import getInnerRequest from "enhanced-resolve/lib/getInnerRequest";

export default class TsconfigWP {
  apply(resolver) {
    resolver
      .getHook(this.source)
      .tapAsync(
        { name: "TsconfigWP" },
        createPluginCallback(
          this.matchPath,
          resolver,
          this.absoluteBaseUrl,
          resolver.getHook(this.target),
          this.extensions
        )
      );
  }
}
function createPluginCallback(
  matchPath,
  resolver,
  absoluteBaseUrl,
  hook,
  extensions
) {
  const fileExistAsync = createFileExistAsync(resolver.fileSystem);
  const readJsonAsync = createReadJsonAsync(resolver.fileSystem);
  return (request, resolveContext, callback) => {
    var _a, _b;
    const innerRequest = getInnerRequest(resolver, request);
    if (
      !innerRequest ||
      ((_a =
        request === null || request === void 0 ? void 0 : request.request) ===
        null || _a === void 0
        ? void 0
        : _a.startsWith(".")) ||
      ((_b =
        request === null || request === void 0 ? void 0 : request.request) ===
        null || _b === void 0
        ? void 0
        : _b.startsWith(".."))
    ) {
      return callback();
    }
    matchPath(
      innerRequest,
      readJsonAsync,
      fileExistAsync,
      extensions,
      (err, foundMatch) => {
        if (err) {
          return callback(err);
        }
        if (!foundMatch) {
          return callback();
        }
        const newRequest = Object.assign(Object.assign({}, request), {
          request: foundMatch,
          path: absoluteBaseUrl,
        });
        // Only at this point we are sure we are dealing with the latest Webpack version (>= 4.0.0)
        // So only now can we require the createInnerContext function.
        // (It doesn't exist in legacy versions)
        const createInnerContext = require("enhanced-resolve/lib/createInnerContext");
        return resolver.doResolve(
          hook,
          newRequest,
          `Resolved request '${innerRequest}' to '${foundMatch}' using tsconfig.json paths mapping`,
          // tslint:disable-next-line:no-any
          createInnerContext(Object.assign({}, resolveContext)),
          (err2, result2) => {
            // Pattern taken from:
            // https://github.com/webpack/enhanced-resolve/blob/42ff594140582c3f8f86811f95dea7bf6774a1c8/lib/AliasPlugin.js#L44
            if (err2) {
              return callback(err2);
            }
            // Don't allow other aliasing or raw request
            if (result2 === undefined) {
              return callback(undefined, undefined);
            }
            // tslint:disable-next-line:no-any
            callback(undefined, result2);
          }
        );
      }
    );
  };
}

function readJson(fileSystem, path2, callback) {
  if ("readJson" in fileSystem && fileSystem.readJson) {
    return fileSystem.readJson(path2, callback);
  }
  fileSystem.readFile(path2, (err, buf) => {
    if (err) {
      return callback(err);
    }
    let data;
    try {
      // @ts-ignore  This will crash if buf is undefined, which I guess it can be...
      data = JSON.parse(buf.toString("utf-8"));
    } catch (e) {
      return callback(e);
    }
    return callback(undefined, data);
  });
}
function createReadJsonAsync(filesystem) {
  // tslint:disable-next-line:no-any
  return (path2, callback2) => {
    readJson(filesystem, path2, (err, json) => {
      // If error assume file does not exist
      if (err || !json) {
        callback2();
        return;
      }
      callback2(undefined, json);
    });
  };
}
function createFileExistAsync(filesystem) {
  return (path2, callback2) => {
    filesystem.stat(path2, (err, stats) => {
      // If error assume file does not exist
      if (err) {
        callback2(undefined, false);
        return;
      }
      callback2(undefined, stats ? stats.isFile() : false);
    });
  };
}
