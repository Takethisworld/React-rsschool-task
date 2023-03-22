import React, { Component } from "react";

type SearchBarProps={
    value:string
}
export default class SearchBar extends Component<SearchBarProps> {
    render(){
        return(
        <div>
            <input type="text" />
        </div>
        )
    }
}