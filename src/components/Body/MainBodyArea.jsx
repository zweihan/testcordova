import * as React from "react";

require("../../../styles/index.scss");

import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

export default class MainBodyArea extends React.Component {
    render(){
        return <div className="MainBody">
            <LeftPanel rootStore={this.props.rootStore}/>
            <RightPanel rootStore={this.props.rootStore}/>
        </div>;
    }
}