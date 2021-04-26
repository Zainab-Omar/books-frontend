import React from 'react'
import { connect } from 'react-redux'
import { addBook } from '../actions/addBook'



class BookInput extends React.Component {

    state = {
        title: '',
        author: '',
        img_url: '',
        likes: 0
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = event => {
        event.preventDefault()
        this.props.addBook(this.state)
        this.setState({
            title: '',
            author: '',
            img_url: ''
        })
        
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Book Title: </label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                    <br />

                    <label>Author Name: </label>
                    <input type="text" name="author" value={this.state.author} onChange={this.handleChange}/>
                    <br />

                    <label>Book Image: </label>
                    <input type="text" name="img_url" value={this.state.img_url} onChange={this.handleChange}/>
                    <br />

                    <input type="submit" />

                </form>
               
            </div>
        )
    }
}


export default connect(null, {addBook})(BookInput);