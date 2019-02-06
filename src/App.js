import React, { Component } from 'react';
import './App.css';
import Button from './containers/Button';
import Profile from './containers/Profile';
class App extends Component {
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
      <p>
      <Profile className="Profile" image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
      firstname="Jeanne"
      name="Rambur"
      birthdate="28/09/1996"
      color="blue"
      post ="BONJOUR ceci est mon dernier post">
      </Profile>
      </p>
      </div>
    );
  }
}

export default App;
