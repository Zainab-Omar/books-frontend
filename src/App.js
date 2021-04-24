// import logo from './logo.svg';
// import './App.css';

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BookInput from './components/bookInput'
// import EditBook from './components/editBook'
import BooksContainer from './containers/BooksContainer'
// import Books from './components/books'
import bookInput from './components/bookInput';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
        <NavBar />
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route exact path="/about" component={About} /> */}
          <Route exact path="/books" component={BooksContainer} />
          <Route exact path="/books/new" component={BookInput} />
        </div>
      </Router>
    )
  }
}
 

export default App;
