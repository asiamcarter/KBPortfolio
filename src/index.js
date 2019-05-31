import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"
import "./index.css";
import KBPortfolio from "./KBPortfolio";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <Router>
        <KBPortfolio/>
    </Router>, document.getElementById("root"));

serviceWorker.unregister();
