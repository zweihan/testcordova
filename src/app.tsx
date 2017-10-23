/**
 * Created by weihan on 20/10/17.
 */

import * as React from "react";
import {Header} from "./components/header";
import {Body} from "./components/body";

require("../styles/index.scss");

export class App extends React.Component{
    render(){

        return <div className="main">
            <Header/>
            <Body/>
        </div>
    }

}

