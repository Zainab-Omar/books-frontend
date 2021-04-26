import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    books: bookReducer,
    comments: commentReducer
})

export default rootReducer;

function bookReducer(state = [], action) {
    switch (action.type){
        // fetch all existing books in backend server
        case 'FETCH_BOOKS':
            return  action.books

        // add new book to database
        case 'ADD_BOOK':
            return state.concat(action.book)

        // edit existing book in database
        // case 'EDIT_BOOK':
        //     let findBook = state.map(book => {
        //         if (book.id === action.book.id){
        //             return action.book
        //         }
        //         else
        //         {return book}
        //     })
        //     return {...state, books: findBook}
            

        // add likes to a book
        case 'LIKE_BOOK':
            return state.map(book => {
                if (book.id === action.book.id) {
                    return action.book
                }
                else
                return book
            })

        default:
            return state

    }
}

function commentReducer(state = [], action){
    switch(action.type) {

        case 'FETCH_COMMENTS':
            return action.comments

        case 'ADD_COMMENT':
            return state.concat(action.comment)

        default:
            return state

            
    }

}