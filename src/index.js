// 유투브 Slow Coding - React Hooks Todo – Revisited 의 후속
// 여기에는 auth0, edit todo form을 추가
// source code: https://github.com/jisooyu/my-react-auth-hooks-update

import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import TodoApp from "./components/TodoApp";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <TodoApp />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
