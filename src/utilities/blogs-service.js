import axios from 'axios'
import { getToken } from './users-service'

const BASE_URL = 'http://localhost:8070/api/v1/blogs'


const setOptions = () => {
     return {headers: {
        'Authorization': `Bearer ${getToken()}`,
        'Content-Type': 'application/json'
    }}
}

export const getBlogs = async () => {
    try {
        const response = await axios.get(BASE_URL, setOptions())
        // console.log(response)
        return response
    } catch (e) {
        console.log(e)
    }
}

export const createBlog = async blogDetails => {
    try {
        const createdBlog = await axios.post(BASE_URL, blogDetails, setOptions())
        return createdBlog
    } catch (e) {
        console.log(e)
    }
}

export const updateBlog = async newBlogDetails => {
    try {
        // console.log(newBlogDetails)
        const updateBlog = await axios.put(`${BASE_URL}/${newBlogDetails._id}`, newBlogDetails, setOptions())
        return updateBlog
    } catch (e) {
        console.log(e)
    }
}

export const deleteBlog = async id => {
    try {
        const deletedMovie = await axios.delete(`${BASE_URL}/${id}`, setOptions())
        return deletedMovie
    } catch (e) {
        console.log(e)
    }
}