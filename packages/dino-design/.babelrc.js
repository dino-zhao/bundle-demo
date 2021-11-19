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
  ],
};
