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
import {fetchProfile} from './actions/fetchProfile'
import SignOut from './components/SignOut'
import {connect} from 'react-redux'

class App extends React.Component {

  componentDidMount = () => {
    this.props.fetchProfile()
  }

  render() {
    return (
      <div>
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
      {/* <SignOut /> */}
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  fetchProfile: () => dispatch(fetchProfile())
})

export default connect(null, mapDispatchToProps)(App);


