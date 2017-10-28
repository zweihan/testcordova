/**
 * Created by weihan on 25/10/17.
 */
import {observable} from 'mobx';


export default class AppStateStore {
    @observable leftPanelOpenState = true;

    toggleLeftPanelPosition(){
        this.leftPanelOpenState = !this.leftPanelOpenState;
    }

}