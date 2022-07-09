import React from "react";
import ReactDOM from "react-dom/client";

import GithubCorner from "react-github-corner";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <App />
    <GithubCorner href="https://github.com/coderosh/booth-multiplier" />
  </React.StrictMode>
);
