/**
 * Created by weihan on 25/10/17.
 */
import {observable, computed, action} from 'mobx';
import * as $ from 'jquery';

var IEX_BASE_URL = "https://api.iextrading.com/1.0";

export default class StockStateStore {
    @observable stockUniverse = [];
    @observable stockSearchTerm = "";
    @observable selectedStock = {};
    @observable selectedStockQuote = {};
    liveStockFunction = null;
    constructor(){

    }
    @computed get displayStockList() {
        return this.filter(this.stockUniverse);
    };

    filter(stocks){
        if(stocks === null || stocks === undefined){
            return [];
        }else{
            var s = stocks.filter((stock)=>{
                if(this.stockSearchTerm)
                    return stock.symbol.toLowerCase().includes(this.stockSearchTerm.toLowerCase()) || stock.name.toLowerCase().includes(this.stockSearchTerm.toLowerCase());
                else
                    return [];
            });
            return s;
        }
    }

    @action onSelectStock(stock){
        console.log('selected: ', stock);
        this.selectedStock = stock;
        if(this.liveStockFunction !== null){
            clearTimeout(this.liveStockFunction);

        }
        this.getStockQuote();

    }
    @action getStockQuote(){
        var stock = this.selectedStock;
        $.get(IEX_BASE_URL + `/stock/${stock.symbol}/quote`).done(function(res){
            this.selectedStockQuote = res;
        }.bind(this));
        this.liveStockFunction = setTimeout(this.getStockQuote.bind(this), 5000);
    }

    @action onStockTermChange(searchTerm){
        this.stockSearchTerm = searchTerm.toUpperCase();
    }

    @action getStockUniverse(){
        $.get(IEX_BASE_URL + "/ref-data/symbols").done(function(res){
            this.stockUniverse.replace(res);
        }.bind(this)).fail(function(){
            this.stockUniverse.replace([]);
        }.bind(this));
    }

}