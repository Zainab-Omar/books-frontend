// import logo from './logo.svg';
// import './App.css';

import React from 'react'
 import BookInput from './components/bookInput'
// import EditBook from './components/editBook'
import BooksContainer from './containers/BooksContainer'
class App extends React.Component {

  render(){
    return(
      <div>
        <BooksContainer />
        <BookInput/>
      </div>
    )
  }
}
 

export default App;
