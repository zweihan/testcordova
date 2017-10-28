/**
 * Created by weihan on 25/10/17.
 */
import {observable} from 'mobx';
import * as $ from 'jquery';

var IEX_BASE_URL = "https://api.iextrading.com/1.0";

export default class StockStateStore {
    @observable stockState;

    constructor(){
        this.getStockUniverse();

    }

    async getStockUniverse(){
        $.get(IEX_BASE_URL + "/ref-data/symbols").done(function(res){
            console.log("res: ", res);
            stockState = res;
        }).fail(function(err){
            console.log(err);
            this.stockState = null;
        });
    }

}