import React from "react"
import {connect} from 'react-redux';
import { Redirect } from "react-router";
import {deleteBook} from '../actions/deleteBook'
import { Link } from 'react-router-dom'


const Profile = ({users, deleteBook})  => {

    if(localStorage.token !== undefined){
        if (users !== undefined){
            return(
                <div>
               <img className="profile-photo" src={users.avatar} alt="picture" width="200"  height="200" />  
               <div className="name-bio">
                <h3>Welcome {users.username}</h3>
                <h5>{users.bio}</h5>
                </div>

                <h1 className="profile-title">your favorites Books :</h1>
                {users.books.map(book => {
                    return(
                        <div className="user-container">
                            <div className="user-books">
                                <div className="user-content">
                          <img src={book.img_url} width="300" height="400" alt="book image" />
                          
                          <p>Title: {book.title}</p>
                          <p>Authors: {book.authors.map(auther => auther)}</p>
                          <p>published Date: {book.published_date}</p>
                          <a href= {book.buy_link} target="_blank">Buy Link</a><br/>
                          <p><Link key={book.id} to={`/books/${book.id}`}>Show details</Link></p>
                          <button onClick = {() => deleteBook(book)}>delete</button>
                          </div>
                          </div>
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



