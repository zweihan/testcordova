import * as React from 'react';


export default class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(event){
        this.props.rootStore.stockState.onStockTermChange(event.target.value);
    }
    render(){
        return <div className="search-bar">
            <div className="search-bar-title">Enter ticker</div>
            <div className="search-bar-body">
                <input id="stock-search" type="text" onChange={this.inputChange}/>
                <button className="btn btn-primary stock-search-btn">Go.</button>
            </div>
        </div>
    }
}