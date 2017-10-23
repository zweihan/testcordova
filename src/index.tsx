import * as React from "react";

import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { AppContainer } from 'react-hot-loader';
import { App } from "./app";

ReactDOM.render(
    <AppContainer>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </AppContainer>,
    document.getElementById("appmounting")

);
