import React from "react"
import {connect} from 'react-redux';
import { Redirect } from "react-router";

const Profile = ({users})  => {

    if(localStorage.token !== undefined){
        if (users !== undefined){
            return(
                <div>
               <img src={users.avatar} alt="picture" width="200"  height="200" />  
                <h1>Welcome {users.username}</h1>
                <p>bio: {users.bio}</p>
                </div>
            )
        }
        else return null
    }
    else return <Redirect to="/signin" />
}

const mapStateToProps = state => {
    return {
       users: state.users.currentUser
    }
}

export default connect(mapStateToProps)(Profile);
