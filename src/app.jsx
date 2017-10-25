/**
 * Created by weihan on 20/10/17.
 */

import * as React from "react";
import {Header} from "./components/Header";
import {Body} from "./components/Body";

require("../styles/index.scss");

export class App extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return <div className="main">
            <Header rootStore={this.props.rootStore}/>
            <Body rootStore={this.props.rootStore}/>
        </div>
    }

}

