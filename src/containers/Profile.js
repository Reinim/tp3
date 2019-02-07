import React from "react";
import Informations from "../components/Informations"
import Post from "../components/Post"
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
            nbColor: 1,
            post: "BONJOUR ceci est mon dernier post",
        }
        this.changerProfil = this.changerProfil.bind(this);
    }

    changerProfil(prenom) {
        if (prenom === 'Jeanne') {
            this.setState({
                firstname: "Jeanne",
                name: "Rambur",
                birthdate: "28/09/1996",
                image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
                color: "lightblue",
                post: "J'aimerais que ce site soit plus beau",
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
            })
        }
        else if (prenom === 'Claude') {
            this.setState({
                firstname: "Claude",
                name: "François",
                birthdate: "01/02/1939",
                image: "https://img2.telestar.fr/var/telestar/storage/images/9/7/9/979492/claude-francois-qui-etaient-les-femmes-vie-photos_exact1024x768_l.jpg",
                color: "blue",
                post: "... on ne peut pas retirer à ce site qu'il fait ce qu'on lui demande.",
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
                    <div style={{ background: this.state.color, marginTop: 30}}>
                        <Informations image={this.state.image} firstname={this.state.firstname}
                            name={this.state.name}
                            birthdate={this.state.birthdate}

                        />
                        <button onClick={() => this.changeColor()} className='Right oButton'>Change Style</button>
                    </div>
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