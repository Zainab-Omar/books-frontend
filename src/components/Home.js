import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div className="home-page">
            <h1 className="home-title">Welcome to Zbooks App</h1>
            <h6 className="home-content">Here you can search for your favorite books, and adding them to your collection</h6>

            <Link to="/books">
             <p className="home-link">See Books</p>
            </Link>
        </div>
    )
}

export default Home;
