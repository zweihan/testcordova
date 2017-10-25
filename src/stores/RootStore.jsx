/**
 * Created by weihan on 24/10/17.
 */
import AppStateStore from './AppStateStore';


export default class RootStore {
    appStateStore;

    constructor(){
        this.appStateStore = new AppStateStore();
    }
}