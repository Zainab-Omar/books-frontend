import React from "react"
import {connect} from 'react-redux';

const Profile = ({users})  => {
    return(
        <div>
       <img src={users.avatar} alt="picture" width="200"  height="200" />  
        <h1>Welcome {users.username}</h1>
        <p>bio: {users.bio}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
       users: state.users.currentUser
    }
}

export default connect(mapStateToProps)(Profile);