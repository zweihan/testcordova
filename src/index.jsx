import * as React from "react";

import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// import { AppContainer } from 'react-hot-loader';
import { App } from "./app";
import RootStore from "./stores/RootStore";

const element = <BrowserRouter>
        <App rootStore = {new RootStore()}/>
    </BrowserRouter>;
ReactDOM.render(
    element,
    document.getElementById("appmounting")

);
