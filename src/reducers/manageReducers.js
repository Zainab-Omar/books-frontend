import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    users: userReducer,
    books: bookReducer,
})

export default rootReducer;

function bookReducer(state = [], action) {
    switch (action.type){
        case 'FETCH_BOOKS':
            return  action.books
        default:
            return state

    }
}

function userReducer(state = [], action) {
    switch (action.type) {
        case 'LOGIN_USER':
          return {...state, currentUser: action.userObj}
        
        case 'SIGNOUT_USER': 
           return {...state, currentUser: {}}

        case 'ERROR_MESSAGE':
            return {...state, error: action.error}

        case 'ADD_BOOK':
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    books: state.currentUser.books.concat(action.book)
                }
            }

        case 'DELETE_BOOK':
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    books: state.currentUser.books.filter(book => book.id !== action.book.id)
                }
            }

        case 'DELETE_COMMENT':
            return {
                ...state,
                    currentUser: {
                        ...state.currentUser,
                        comments: state.currentUser.comments.filter(comment => comment.id !== action.comment.id)
                    }
                }
    
        case 'ADD_COMMENT':
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    comments: state.currentUser.comments.concat(action.comment)
                }
            }

        default:
          return state;
      }
}