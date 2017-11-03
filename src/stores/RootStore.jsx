/**
 * Created by weihan on 24/10/17.
 */
import AppStateStore from './AppStateStore';
import StockStateStore from './StockStateStore';

export default class RootStore {
    appStateStore;
    stockState;
    constructor(){
        this.appState = new AppStateStore();
        this.stockState = new StockStateStore();
    }
}