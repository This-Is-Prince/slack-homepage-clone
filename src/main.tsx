import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import "./index.css";

const GlobalStyle = createGlobalStyle`
  *, 
  *::after,
  *::before{
    margin: 0;
    padding: 0;box-sizing: border-box;
  }
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      <App />
    </>
  </React.StrictMode>
);
