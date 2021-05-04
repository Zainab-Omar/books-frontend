import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div className="home-page">
            <div className="home">
            <h1 className="home-logo">Welcome to Zbooks App</h1>
            <h2 className="home-content">Users can view, search, like , comment, and add books1</h2>

            <Link to="/books">
             <h2>See Books</h2>
            </Link>
            </div>
        </div>
    )
}

export default Home;