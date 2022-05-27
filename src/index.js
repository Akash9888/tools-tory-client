import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { transitions } from "react-alert";
// const options = {
//     // you can also just use 'bottom center'
//     position: positions.BOTTOM_CENTER,
//     timeout: 5000,
//     offset: "30px",
//     // you can also just use 'scale'
//     transition: transitions.SCALE,
// };
const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER,
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider template={AlertTemplate} {...options}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
