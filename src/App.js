import React, { Component } from 'react';
import './App.css';
import Button from './containers/Button';
import Profile from './containers/Profile';
class App extends Component {
  
  constructor(props) {
    super(props);
    this.firstname="Jeanne";
    this.name="Rambur";
    this.birthdate="28/09/1996";
    this.image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg";
    this.color="lightblue";
    this.post ="BONJOUR ceci est mon dernier post"
  }
   
     
  
  render() {
    return (
      <div> 
      <div className="BarBoutons">
        <Button
        name="Jeanne"
        />
        <Button
        name="Martine"
        />
        <Button
        name="Claude"
        />
      </div>
      <p className="Profile">
      <Profile  image={this.image}
      firstname={this.firstname}
      name={this.name}
      birthdate={this.birthdate}
      color={this.color}
      post = {this.post}>
      </Profile>
      </p>
      </div>
    );
  }
}

export default App;
