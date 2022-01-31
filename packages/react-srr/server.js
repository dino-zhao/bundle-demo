import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import AppRoute from "./client/Routes";
import { StaticRouter } from "react-router-dom/server";
const app = express();

app.use(express.static("public"));
app.get("*", (req, res) => {
  console.log(req.path);
  const content = renderToString(
    <StaticRouter location={req.path}>
      <AppRoute />
    </StaticRouter>
  );

  const html = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
