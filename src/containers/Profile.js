import React from "react";
import Informations from "../components/Informations"
import Post from "../components/Post"
class Profile extends React.Component
{
    render()
    {
        return(
            <div>
            <Informations image={this.props.image} firstname={this.props.firstname} 
            name={this.props.name} 
            birthdate={this.props.birthdate}
            color={this.props.color}/>
            <Post
            post={this.props.post}>
            </Post>
            </div>
        )
    }
}

export default Profile;