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

    @computed get displayStockList() {
        return this.filter(this.stockUniverse);
    };

    filter(stocks){
        if(stocks === null || stocks === undefined){
            return [];
        }else{
            var s = stocks.filter((stock)=>{
                if(this.stockSearchTerm)
                    return stock.symbol.includes(this.stockSearchTerm);
                else
                    return stock;
            });
            return s;
        }
    }

    @action onSelectStock(stock){
        console.log(stock);
        this.selectedStock = stock;
        console.log(this.selectedStock);
    }
    @action onStockTermChange(searchTerm){
        this.stockSearchTerm = searchTerm.toUpperCase();
    }
    @action getStockUniverse(){
        $.get(IEX_BASE_URL + "/ref-data/symbols").done(function(res){
            console.log(this);
            this.stockUniverse.replace(res);
        }.bind(this)).fail(function(){
            this.stockUniverse.replace([]);
        }.bind(this));
    }

}