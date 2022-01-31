import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Routes from "./client/Routes";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import createStoreWithInitial from "./client/redux";
import { renderRoutes, matchRoutes } from "react-router-config";
const app = express();
app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createStoreWithInitial();
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    const component = route.component;
    return component.getInitialData ? component.getInitialData(store) : null;
  });

  Promise.all(promises).then(() => {
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path}>{renderRoutes(Routes)}</StaticRouter>
      </Provider>
    );
    const html = `
    <html>
      <head></head>
      <script>
        window.INITIAL_STATE = ${JSON.stringify(store.getState())}
      </script>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;

    res.send(html);
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
