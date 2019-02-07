import React from "react";
import '../components/main.css'

export default class Button extends React.Component
{
    
      handleClick() {
        console.log('this is:', this.props.name);
      }
    
    render(){
        return(
            <p>
            <button className='button' onClick={(e) => this.handleClick(e)} >{this.props.name}</button>
            </p>
             );
    }
}