import * as React from "react";
import {observer} from "mobx-react";
require("../../../styles/RightPanel.scss");

@observer
export default class RightPanel extends React.Component {

    render() {
        var selectedStock = this.props.rootStore.stockState.selectedStock;
        return <div className="main-right-panel">
            <div className="right-panel-title">{selectedStock.name ? selectedStock.name : "Pick a Stock"}</div>
        </div>;

    }
}