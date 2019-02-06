import React from "react";
import '../components/main.css'

export default class Button extends React.Component
{
    render(){
        return(
            <p>
            <button class='button'>{this.props.name}</button>
            </p>
             );
    }
}