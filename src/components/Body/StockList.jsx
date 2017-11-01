import * as React from "react";
import {observer} from "mobx-react";



@observer
class StockList extends React.Component{

    constructor(props){
        super(props);
    }

    onSelectStock(stock){
        this.props.rootStore.stockState.onSelectStock(stock);
    }
    componentWillMount(){
        this.props.rootStore.stockState.getStockUniverse();
    }

    render(){
        var stocklist = this.props.rootStore.stockState.displayStockList;
        var stockSelected = this.props.rootStore.stockState.selectedStock;
        return <div className="stocklist">
            {stocklist.map(stock=>{
                return <li className={ "stocklist-item " +  (stockSelected.symbol === stock.symbol ? "selected" : "")}
                           key={stock.symbol}
                           onClick={this.onSelectStock.bind(this, stock)}>{stock.symbol}</li>
            })}
        </div>;
    }
}

export default StockList;