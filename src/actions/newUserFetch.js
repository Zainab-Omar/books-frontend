export const newUserFetch = user => {
    return dispatch => {
       return fetch("https://zbooks-api.herokuapp.com/api/v1/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({user})
        })
        .then(res => res.json())
        .then(data => {
            if(data.message){
                dispatch(handleError(data.message))
            }
            else {
                localStorage.setItem("token", data.jwt)
                dispatch(loginUser(data.user))
            }
        })
    }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    userObj
})

const handleError = error => ({
    type: 'ERROR_MESSAGE',
    error
})