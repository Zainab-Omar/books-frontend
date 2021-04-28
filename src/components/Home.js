import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div>
            <h1>Books database</h1>
            <h2>You can view books like and comment on them and add books</h2>

            <Link to="/books">
            <button>See Books</button>
            </Link>
        </div>
    )
}

export default Home;