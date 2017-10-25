/**
 * Created by weihan on 21/10/17.
 */
import * as React from "react";

import LeftHeader from "./Headers/LeftHeader"
import RightHeader from "./Headers/RightHeader"


require("../../styles/index.scss");
export class Header extends React.Component{
    render(){
        return <div className="header">
            <LeftHeader/>
                <div className="Title">App title</div>
            <RightHeader/>
        </div>
    }
}