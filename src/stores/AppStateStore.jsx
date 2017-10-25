/**
 * Created by weihan on 25/10/17.
 */
import {extendObservable} from 'mobx';


export default class AppStateStore {
    constructor(){
        extendObservable(this, {
                leftPanelOpenState: true
            }
        );
    }

}