import '../App.css'
import React, { Component } from "react";
import search from './assets/loupe.png'

type SearchBarProps={
}

type SearchBarState={
    searchValue:string
}
export default class SearchBar extends Component<SearchBarProps,SearchBarState> {
    state:SearchBarState={
        searchValue:''
    }

    componentDidMount(): void {
        const searchValueinLoad = localStorage.getItem('localSearchValue');

        if(searchValueinLoad){
            this.setState(()=>({searchValue:searchValueinLoad}))
        }
    }

    componentWillUnmount(): void {
        localStorage.setItem('localSearchValue',this.state.searchValue)
    }

    updateSearchValue=(e:{target:HTMLInputElement})=>{
        this.setState=(()=>({searchValue:e.target.value}))
    }
    render(): React.ReactNode{
        return(
        <div className='searchbar_cont'>
            <img src={search} alt='search' className='search_img'/>
            <input type="text" 
            className="search_bar"
            onChange={this.updateSearchValue}
            value={this.state.searchValue}/>
        </div>
        )
    }
}