import React from "react";
import ReactDOMMini from "./ReactDOMMini";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot();
ReactDOMMini.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
