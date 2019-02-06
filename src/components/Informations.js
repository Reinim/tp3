import React from "react";
import '../components/main.css'

export default class Informations extends React.Component
{
    render(){
        return(
            <div style={{background:this.props.color }}> 
            <img className="imgProfile" src={this.props.image} alt= 'imageDuProfil'/>
            <p style={{clear: "both"}}><div style={{float: "left", paddingLeft: '25%'}}>{this.props.firstname}</div> 
            <div style={{float: "right", paddingRight: '25%'}}>{this.props.name}</div></p>
            <p style={{float: "left",paddingLeft: '25%'}}>{this.props.birthdate} </p>
            <button className='Right oButton'>Change Style</button>
            </div>
             );
    }
}