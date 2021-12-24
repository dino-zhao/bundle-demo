import Mp from "@/plugin";
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
import resolve from "enhanced-resolve";
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

test("resolver-package", (done) => {
  // "C:\\code\\bundle-demo\\packages\\webpack-plugin",
  const myResolver = resolve.create({
    extensions: [".js"],
    plugins: [new Mp()],
  });
  myResolver(
    "C:\\code\\bundle-demo\\packages\\webpack-plugin",
    "jest",
    (err /*Error*/, filepath /*string*/) => {
      console.log(filepath);
      done();
    }
  );
});

test("resolver-tsconfig", (done) => {
  // "C:\\code\\bundle-demo\\packages\\webpack-plugin",
  const myResolver = resolve.create({
    extensions: [".js"],
    plugins: [new Mp()],
  });
  myResolver(
    "C:\\code\\bundle-demo\\packages\\webpack-plugin",
    "src/index.js",
    (err /*Error*/, filepath /*string*/) => {
      console.log(filepath);
      done();
    }
  );
});
