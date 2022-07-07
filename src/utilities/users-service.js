export const login = async credentials => {
    try {
        console.log('users servce', credentials)
        // const token = await axios.post(`${BASE_URL}/login`, credentials)

        // console.log(token.data)

        // Persist the token using Window localStorage
        // setItem() first arg is the property name and the second arg is the value
        // localStorage.setItem('token', token.data)

        // return getUser()
    } catch(e) {
        console.log(e)
    }
}