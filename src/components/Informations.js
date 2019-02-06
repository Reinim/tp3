import React from "react";
import '../components/Informations.css'

export default class Informations extends React.Component
{
    render(){
        return(
            <div style={{background:this.props.color }}> 
            <img className="imgProfile" src={this.props.image} alt= 'imageDuProfil'/>
            <p>{this.props.firstname} {this.props.name}</p>
            <p>{this.props.birthdate} </p>
            <button className='Right'>Change Style</button>
            </div>
             );
    }
}