import * as React from "react";

require("../../../styles/RightPanel.scss");

export default class RightPanel extends React.Component {
    render() {
        var selectedStock = this.props.rootStore.appState.selectedStock;
        return <div class="main-right-panel">
            <div class="right-panel-title">{selectedStock ? selectedStock : "Pick a Stock"}</div>
        </div>;

    }
}