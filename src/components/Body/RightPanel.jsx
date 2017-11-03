import * as React from "react";
import {observer} from "mobx-react";
import StockInfoCard from "./StockInfoCard";
require("../../../styles/RightPanel.scss");

@observer
export default class RightPanel extends React.Component {

    render() {
        var selectedStock = this.props.rootStore.stockState.selectedStock;
        console.log(this.props.rootStore.stockState);
        var selectedStockQuote = this.props.rootStore.stockState.selectedStockQuote;
        console.log(selectedStockQuote);
        return <div className="main-right-panel">
            <div className="right-panel-title">{selectedStock.name ? selectedStock.name +"(" +selectedStock.symbol+ ")" : "Pick a Stock"}</div>
            {selectedStockQuote.symbol ?
                <div className="right-panel-body">
                    <StockInfoCard stockQuote={selectedStockQuote}/>
                </div>
                :
                <div></div>
            }

        </div>;

    }
}