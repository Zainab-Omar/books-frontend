// import logo from './logo.svg';
// import './App.css';

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
// import EditBook from './components/EditBook'
import BooksContainer from './containers/BooksContainer'
// import Books from './components/books'
import BookInput from './components/BookInput';
import BookShow from './containers/BookShow'
// import CommentInput from './components/CommentInput'
import Home from './components/Home'


class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
        <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={BooksContainer} />
          <Route exact path="/add/book" component={BookInput} />
          <Route exact path="/books/:bookId" component={BookShow} />
        </div>
      </Router>
    )
  }
}
 

export default App;
