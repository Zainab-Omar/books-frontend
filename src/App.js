import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import BooksContainer from './containers/BooksContainer'
import BookShow from './containers/BookShow'
import Home from './components/Home'
import About from './components/About'
import Signup from './components/Signup';
import Signin from './components/Signin';
import {fetchProfile} from './actions/fetchProfile'
import SignOut from './components/SignOut'
import {connect} from 'react-redux'
import Profile from './components/Profile'


class App extends React.Component {

  componentDidMount = () => {
    this.props.fetchProfile()
  }

  render() {
    return (
      <div>
      <Router>
        <Switch>
        <div className="App">
        <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/books" component={BooksContainer} />
          <Route exact path="/books/:bookId" component={BookShow} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/signout" component={SignOut} />
         
        </div>
        </Switch>
      </Router>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  fetchProfile: () => dispatch(fetchProfile())
})

export default connect(null, mapDispatchToProps)(App);