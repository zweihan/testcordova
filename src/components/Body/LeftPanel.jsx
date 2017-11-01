import * as React from "react";
import {observer} from "mobx-react";
import SearchBar from "./SearchBar";
import StockList from "./StockList";

require("../../../styles/LeftPanel.scss");


@observer class LeftPanel extends React.Component {
    togglePanelPosition(){
        this.props.rootStore.appState.toggleLeftPanelPosition();
    }


    render() {
        // var isSearchBarOpen = ;
        var isSearchBarOpen = this.props.rootStore.appState.leftPanelOpenState;
        return <div className={"main-left-panel " + (isSearchBarOpen ? "main-left-panel-open": "main-left-panel-close")}>
            <div className="left-panel-header">
                <span className={"fa close-panel-btn " +(isSearchBarOpen ? "fa-chevron-left" : "fa-chevron-right" )}
                      onClick={this.togglePanelPosition.bind(this)}
                >
                x
                </span>
            </div>
            <div className="left-panel-body">
                {isSearchBarOpen ? <SearchBar rootStore = {this.props.rootStore}/>:<div></div>}
                {isSearchBarOpen ? <StockList rootStore ={this.props.rootStore}/>:<div></div>}
            </div>
        </div>;
    }
}
export default LeftPanel;