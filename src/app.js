import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/style.scss";

console.log("Hello World");

// We will be doing React Roouting

// Routing which happens on the Client side on changing URL's with HTML5 history API

ReactDOM.render(
  <p>Hello this is a boilerplate</p>,
  document.querySelector(".main-container")
);
