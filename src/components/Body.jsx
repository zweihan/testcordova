/**
 * Created by weihan on 21/10/17.
 */
import * as React from "react";

import MainBodyArea from "./Body/MainBodyArea"
require("../../styles/index.scss");

export class Body extends React.Component{
    render(){
        return <div className="body">
            <div className="body-top">

            </div>
            <MainBodyArea rootStore={this.props.rootStore}/>
        </div>;
    }
}