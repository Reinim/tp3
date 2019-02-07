import React from "react";

export default class Post extends React.Component
{
    render(){
        return(
            <div style={{background:this.props.color}}> 
            <p style={{textAlign: "center", paddingTop:15}}>{this.props.post}</p>
            </div>
             );
    }
}