import React from 'react'


class SearchBook extends React.Component {

    handleSubmit = event => {
        event.preventDefault()
        this.props.findBook(document.getElementById("book").value)
    }

    render(){   
      return(
        <div>
            <form onSubmit={this.handleSubmit}>  
                <br />
                <label>Find Book: </label>
                <input type="text" id="book"/>
                <input type="submit" />
            </form>
        </div>
    )
      }
}



export default SearchBook