import * as React from "react";

import SearchBar from "./SearchBar";

require("../../../styles/LeftPanel.scss");

export default class LeftPanel extends React.Component {
    render() {
        // var isSearchBarOpen = ;
        var isSearchBarOpen = this.props.rootStore.appStateStore.leftPanelOpenState;
        return <div className={"main-left-panel " + (isSearchBarOpen ? "main-left-panel-open": "main-left-panel-close")}>
            <div className="left-panel-header">

            </div>
            <div className="left-panel-body">
                <SearchBar />

            </div>
        </div>;
    }
}