import React from "react";

export default class Post extends React.Component
{
    render(){
        return(
            <div style={{background:this.props.color}}> 
            <p>{this.props.post}</p>
            <button>C'est super</button>
            </div>
             );
    }
}