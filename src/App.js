import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BooksContainer from './containers/BooksContainer'
import BookInput from './components/BookInput';
import BookShow from './containers/BookShow'
import Home from './components/Home'
import About from './components/About'
import Signup from './components/Signup';
import Signin from './components/Signin';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
        <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/books" component={BooksContainer} />
          <Route exact path="/add/book" component={BookInput} />
          <Route exact path="/books/:bookId" component={BookShow} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
        </div>
      </Router>
    )
  }
}
 

export default App;
