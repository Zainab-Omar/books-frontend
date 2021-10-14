import React from "react"
import {connect} from 'react-redux';
import { Redirect } from "react-router";
import {deleteBook} from '../actions/deleteBook'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

const Profile = ({users, deleteBook})  => {

    if(localStorage.token !== undefined){
        if (users !== undefined){
            return(
                <div>
                <h2 className="user-name">Welcome {users.username}</h2>
               

                <h1 className="profile-title">your favorites Books :</h1>
                {users.books.map(book => {
                    return(
                        <div className="user-container">
                              <Card style={{ width: '18rem', height: '560px' }}>
                                <Card.Img className="image-size" variant="top" src={book.img_url} />
                                <Card.Body>
                                    <Card.Title>Title: {book.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Authors: {book.authors.map(author => author)}</Card.Subtitle>
                                    <Card.Text>
                                     published Date: {book.published_date}
                                    </Card.Text>
                                    <a href= {book.buy_link} target="_blank">Buy Link</a>
                                    <p><Link key={book.id} to={`/books/${book.id}`}>Show details</Link></p>
                                    <Button variant="secondary" size="sm" onClick = {() => deleteBook(book)}>delete</Button>
                                    
                                </Card.Body>
                            </Card>

                      
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



// <div className="user-container">
// <div className="user-books">
//     <div className="user-content">
// <img src={book.img_url} width="300" height="400" alt="book image" />

// <p>Title: {book.title}</p>
// <p>Authors: {book.authors.map(author => author)}</p>
// <p>published Date: {book.published_date}</p>
// <a href= {book.buy_link} target="_blank">Buy Link</a><br/>
// <p><Link key={book.id} to={`/books/${book.id}`}>Show details</Link></p>
// <button onClick = {() => deleteBook(book)}>delete</button>
// </div>
// </div>
// </div>