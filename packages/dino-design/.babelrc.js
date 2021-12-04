module.exports = {
  presets: [
    [
      "@babel/env",
      {
        modules: false,
      },
    ],
    "@babel/typescript",
    "@babel/react",
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        helpers: true,
      },
    ],
    [
      "import",
      { libraryName: "antd", style: "css", libraryDirectory: "es" },
      "antd",
    ],
  ],
};
