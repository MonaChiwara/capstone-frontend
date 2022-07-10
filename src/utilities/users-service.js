import axios from "axios"

const BASE_URL = 'http://localhost:8070/api/v1/users'

export const login = async credentials => {
    try {
        console.log('users service', credentials)
        const token = await axios.post(`${BASE_URL}/login`, credentials)

        console.log(token.data)

        localStorage.setItem('token', token.data)


    } catch (e) {
        console.log(e)
    }
}

export const getToken = () => {
    const token = localStorage.getItem('token')

    if (!token) return null

    const payload = JSON.parse(atob(token.split('.')[1]))

    if (payload.exp * 1000 < Date.now()) {
        localStorage.removeItem('token')
        return null
    }

    return token
}

export const getUser = () => {
    const token = getToken()
    return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

export const logOut = () =>  {
    localStorage.removeItem('token')
}