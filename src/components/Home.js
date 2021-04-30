import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div className="home-page">
            <div className="home">
            <h1 className="home-logo">Zbooks</h1>
            <h2 className="home-content">You can view books like and comment on them and add books</h2>

            <Link to="/books">
             <h2>See Books</h2>
            </Link>
            </div>
        </div>
    )
}

export default Home;