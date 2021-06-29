import React from "react"
import {connect} from 'react-redux';
import { Redirect } from "react-router";
import {deleteBook} from '../actions/deleteBook'

const Profile = ({users, deleteBook})  => {

    if(localStorage.token !== undefined){
        if (users !== undefined){
            return(
                <div>
               <img src={users.avatar} alt="picture" width="200"  height="200" />  
                <h1>Welcome {users.username}</h1>
                <p>bio: {users.bio}</p>
                <h3>your saved Books :</h3>
                
                {users.books.map(book => {
                    return(
                        <div>
                          <img src={book.img_url} width="200" height="200" alt="book image" />
                          <p>Title: {book.title}</p>
                          <p>Authors: {book.authors.map(auther => auther)}</p>
                          <p>published Date: {book.published_date}</p>
                          <a href= {book.buy_link} target="_blank">Buy Link</a>
                          <button onClick = {() => deleteBook(book)}>delete</button>
                        </div>
                    
                )})}

                </div>
            )
        }
        else return null
    }
    else return (
        <Redirect to="/signin" />
    
    ) 
}

const mapStateToProps = state => {
    return {
       users: state.users.currentUser
    }
}

export default connect(mapStateToProps, { deleteBook })(Profile);



