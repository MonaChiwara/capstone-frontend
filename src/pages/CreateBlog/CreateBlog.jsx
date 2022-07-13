import { useState } from 'react'
import * as blogsService from '../../utilities/blogs-service'
import { useNavigate } from 'react-router-dom'
import './CreateBlog.css'

const CreateBlog = () => {
    // If you don't specifically define object properties in your state, if you set your state anywhere in your code, it will automatically create the state object property for you.
    const [blogDetails, setBlogDetails] = useState({
        title: '',
        author: '',
        description: '',
        image: '',
        createdAt: '',
    })

    const navigate = useNavigate()

    const handleChange = e => {
        setBlogDetails({
            ...blogDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        blogsService.createBlog(blogDetails)
        navigate('/blogs')
    }

    // console.log(blogDetails)
    return (
        <form className="row g-3" id='create-movie-form' onSubmit={handleSubmit}>
            <div className="col-md-6">
                <label htmlFor="inputTitle4" className="form-label">Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputTitle4"
                    name='title'
                    onChange={handleChange}
                    value={blogDetails.title}
                    
                />
            </div>
           
            
            <div className="col-md-6">
                <label htmlFor="inputAuthor" className="form-label">Author</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="inputAuthor" 
                    name='author'
                    onChange={handleChange}
                    value={blogDetails.author}
                />
            </div>


            <div className="col-12">
                <label htmlFor="inputImage" className="form-label">Image</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="inputImage"
                    name='image'
                    onChange={handleChange}
                    value={blogDetails.image}
                />
            </div>

            <div className="col-12">
                <label htmlFor="inputDescription" className="form-label">Description</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="inputDescription"
                    name='description'
                    onChange={handleChange}
                    value={blogDetails.description} 
                />
            </div>

            <div className="col-12">
                <label htmlFor="inputBody" className="form-label">Content</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="inputBody"
                    name='body'
                    onChange={handleChange}
                    value={blogDetails.body}
                />
            </div>

            

            <div className="col-12">
                <button type="submit" className="btn btn-primary">Create Blog</button>
            </div>
        </form>
    );
}

export default CreateBlog;