import * as React from 'react';


export default class SearchBar extends React.Component {
    render(){
        return <div className="search-bar">
            <input type="text"/>
            <button className="btn btn-primary"></button>
        </div>
    }
}