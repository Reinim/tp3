import React from "react";
import Informations from "../components/Informations"
import Post from "../components/Post"
import '../components/main.css'
class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: "Jeanne",
            name: "Savary",
            birthdate: "02/02/1966",
            image: "https://resize.programme-television.ladmedia.fr/r/670,670/img/var/premiere/storage/images/tele-7-jours/news-tv/en-famille-m6-jeanne-savary-je-deteins-sur-marjorie-4589102/94500194-1-fre-FR/En-Famille-M6-Jeanne-Savary-Je-deteins-sur-Marjorie.jpg",
            color: "lightblue",
            nbColor: 1,
            post: "Mais elle est où Jeanne ?",
            likes: 0,
            jeanne: 0,
            claude: 0,
            martine: 0,
        }
        
        this.changerProfil = this.changerProfil.bind(this);
    }

    ajoutLikes(prenom) {
        if (this.state.firstname === 'Jeanne') {
            this.setState({
                jeanne: this.state.jeanne + 1,
                likes : this.state.jeanne
            })
        }
        else if (this.state.firstname === 'Martine') {
            this.setState({
                martine: this.state.martine + 1,
                likes : this.state.martine
            })
        }
        else if (this.state.firstname === 'Claude') {
            this.setState({
                claude: this.state.claude += 1,
                likes : this.state.claude
            })
        }
    }
    changerProfil(prenom) {
        if (prenom === 'Jeanne') {
            this.setState({
                firstname: "Jeanne",
                name: "Savary",
                birthdate: "02/02/1966",
                image: "https://resize.programme-television.ladmedia.fr/r/670,670/img/var/premiere/storage/images/tele-7-jours/news-tv/en-famille-m6-jeanne-savary-je-deteins-sur-marjorie-4589102/94500194-1-fre-FR/En-Famille-M6-Jeanne-Savary-Je-deteins-sur-Marjorie.jpg",
                color: "lightblue",
                post: "Mais elle est où Jeanne ?",
                likes: this.state.jeanne
            })
        }
        else if (prenom === 'Martine') {
            this.setState({
                firstname: "Martine",
                name: "Aubry",
                birthdate: "08/08/1950",
                image: "https://www.dakar7.com/wp-content/uploads/2016/02/marie.jpg",
                color: "pink",
                post: "L'interface est pas dingue, et le choix des couleurs pas top",
                likes: this.state.martine
            })
        }
        else if (prenom === 'Claude') {
            this.setState({
                firstname: "Claude",
                name: "François",
                birthdate: "01/02/1939",
                image: "https://1.bp.blogspot.com/-ABAEa2b5rao/WqKWB8Y_T5I/AAAAAAAAB7M/yg4z9P9XR_AJjrRaaJpkNUuqM_JMaFunwCLcBGAs/s1600/ClaudeFran%25C3%25A7ois.jpg",
                color: "blue",
                post: "... on ne peut pas retirer à ce site qu'il fait ce qu'on lui demande.",
                likes: this.state.claude
            })
        }
    }
    changeColor() {
        if (this.state.nbColor === 1) {
            this.setState({

                color: "green",
                nbColor: 2

            })

        }
        else if (this.state.nbColor === 2) {
            this.setState({

                color: "blue",
                nbColor: 3

            })

        }
        else if (this.state.nbColor === 3) {
            this.setState({

                color: "pink",
                nbColor: 4

            })

        }
        else if (this.state.nbColor === 4) {
            this.setState({

                color: "purple",
                nbColor: 1

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
                    <div style={{ background: this.state.color, marginTop: 30 }}>
                        <Informations image={this.state.image} firstname={this.state.firstname}
                            name={this.state.name}
                            birthdate={this.state.birthdate}

                        />
                        <button onClick={() => this.changeColor()} className='Right oButton'>Change Style</button>
                    </div>

                    <div style={{ background: this.state.color, marginTop: 30 }}>

                        <Post
                            post={this.state.post}
                            color={this.state.color}>
                        </Post>
                        <button className='oButton' style={{ marginLeft: 15 }} onClick={() => this.ajoutLikes()}>👍 C'est super</button>

                        {this.state.likes}
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;