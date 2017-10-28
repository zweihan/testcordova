import * as React from 'react';


export default class SearchBar extends React.Component {
    render(){
        return <div className="search-bar">
            <div className="search-bar-title">Enter ticker</div>
            <div className="search-bar-body">
                <input id="stock-search" type="text"/>
                <button className="btn btn-primary stock-search-btn">Go.</button>
            </div>
        </div>
    }
}