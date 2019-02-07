import React from "react";
import Informations from "../components/Informations"
import Post from "../components/Post"
import Button from "../containers/Button"
import '../components/main.css'
class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: "Jeanne",
            name: "Rambur",
            birthdate: "28/09/1996",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
            color: "lightblue",
            post: "BONJOUR ceci est mon dernier post",
        }
        this.changerProfil = this.changerProfil.bind(this);
    }

    changerProfil(prenom) {
        if(prenom==='Jeanne')
        {
            this.setState({
                firstname: "Jeanne",
                name: "Rambur",
                birthdate: "28/09/1996",
                image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
                color: "lightblue",
                post: "BONJOUR ceci est mon dernier post",
            }) 
        }
        else if(prenom==='Martine')
        {
            this.setState({
                firstname: "Martine",
                name: "Aubry",
                birthdate: "08/08/1950",
                image: "https://www.dakar7.com/wp-content/uploads/2016/02/marie.jpg",
                color: "pink",
                post: "BONJOUR ceci est mon dernier post",
            }) 
        }
        else if(prenom==='Claude')
        {
            this.setState({
                firstname: "Claude",
                name: "François",
                birthdate: "01/02/1939",
                image: "https://img2.telestar.fr/var/telestar/storage/images/9/7/9/979492/claude-francois-qui-etaient-les-femmes-vie-photos_exact1024x768_l.jpg",
                color: "blue",
                post: "BONJOUR ceci est mon dernier post",
            }) 
        }
    }
    render() {
        return (
            <div>
                <div className="BarBoutons">
                <button className='button' onClick={() => this.changerProfil('Jeanne')} >Jeanne</button>
                <button className='button' onClick={() => this.changerProfil('Martine')} >Martine</button>
                <button className='button' onClick={() => this.changerProfil('Claude')} >Claude</button>
                </div>
                <div className='Profile'>
                    <Informations image={this.state.image} firstname={this.state.firstname}
                        name={this.state.name}
                        birthdate={this.state.birthdate}
                        color={this.state.color}
                    />
                    <button onClick={() => this.props.handleClick}>OUI</button>
                    <Post 
                        post={this.state.post}
                        color={this.state.color}>
                    </Post>
                </div>
            </div>
        )
    }
}

export default Profile;