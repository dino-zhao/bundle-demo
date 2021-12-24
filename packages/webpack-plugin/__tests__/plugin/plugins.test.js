import Mp from "@/plugin";
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
import resolve, {
  CachedInputFileSystem,
  ResolverFactory,
} from "enhanced-resolve";
const fs = require("fs");
function getL() {
  return Promise.resolve(2);
}
test("base test", () => {
  const a = new Mp();
  expect(a).toBeInstanceOf(Mp);
});

test("plugn", async () => {
  await expect(getL()).resolves.toEqual(2);
});

test("resolver", (done) => {
  // "C:\\code\\bundle-demo\\packages\\webpack-plugin",
  const myResolver = resolve.create({
    extensions: [".js"],
    plugins: [new TsconfigPathsPlugin()],
  });
  myResolver("", "src/plugin.js", (err /*Error*/, filepath /*string*/) => {
    console.log(filepath);
    done();
  });
});
