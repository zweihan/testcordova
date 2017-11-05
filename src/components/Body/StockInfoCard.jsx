import * as React from "react";
import {observer} from "mobx-react";
import {toPercent} from "../Utils";
require("../../../styles/StockInfoCard.scss");
@observer
export default class StockInfoCard extends React.Component {

    render() {
        var quote = this.props.stockQuote;
        return <div className="stock-card stock-info">
            <div className="card-header">
                <div className="price-header">
                <span className="latest-price">{parseFloat(quote.latestPrice).toFixed(2)}</span>
                <span className={"price-change " + (parseFloat(quote.change) >= 0 ? "pos-change":"neg-change")}>
                    <span className="abs-change ">
                        {quote.change}
                    </span>
                    <span className="pct-change ">
                        ({toPercent(quote.changePercent)})
                    </span>
                </span>
                </div>
                <div className="price-info">
                <span className="latest-time">Latest Time: {quote.latestTime}</span>
                </div>
            </div>

            <table className="stock-table">
                <tbody>
                <tr>
                    <td>
                        Symbol
                    </td>
                    <td>
                        {quote.symbol}
                    </td>
                </tr>
                <tr>
                    <td>
                        Sector
                    </td>
                    <td>
                        {quote.sector}
                    </td>
                </tr>
                <tr>
                    <td>
                        PE Ratio
                    </td>
                    <td>
                        {quote.peRatio}
                    </td>
                </tr>
                <tr>
                    <td>
                        52 Week High
                    </td>
                    <td>
                        {quote.week52High}
                    </td>
                </tr>
                <tr>
                    <td>
                        52 Week Low
                    </td>
                    <td>
                        {quote.week52Low}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>;

    }
}