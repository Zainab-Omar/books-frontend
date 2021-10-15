import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return(
        <div className="home-page">
            <h1 className="home-title">Welcome to ZBooks App</h1>
            <h3 className="home-content">ZBooks application is designed to enable users to search for thier favorite books. Users can create an account to access other functionalities
             like add/remove books to thier collection add/remove notes. </h3>

            <Link to="/books">
             <p className="home-link">See Books</p>
            </Link>
           
        </div>
    )
}

export default Home;
