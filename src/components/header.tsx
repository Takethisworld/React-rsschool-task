import React, { Component } from "react";

type HeaderProps ={
    currentPage: string
}

export default class Header extends Component<HeaderProps>{
    render(){
        let currentPage =this.props.currentPage.substring(1).length !==0 ?
        this.props.currentPage.substring(1):'Main';
        
        return(
            <header>
            <h1>Header</h1>
            <h4>CurrentPage :{currentPage}</h4>
        </header>
        )
}
}

