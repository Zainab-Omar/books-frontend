export const newUserFetch = user => {
    return dispatch => {
        fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({user})
        })
        .then(res => res.json())
        .then(data => {
            if(data.message){}
            else {
                localStorage.setItem("token", data.token)
                dispatch(loginUser(data.user))
            }
        })
    }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    userObj
})