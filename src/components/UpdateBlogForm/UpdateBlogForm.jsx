import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import * as blogsService from '../../utilities/blogs-service'

const UpdateBlogForm = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const blog = location.state

    const [blogDetails, setBlogDetails] = useState(blog)

    // console.log(location.state)

    const handleChange = e => {
        setBlogDetails({
            ...blogDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await blogsService.updateBlog(blogDetails)
            // console.log(res)
            if (res.status === 200) navigate(`/blogs/${blogDetails.id}`, { state: blogDetails })
        } catch (e) {
            console.log(e)
        }
    }

    // console.log(blogDetails)
    return (
        <form className="row g-3" id='create-blog-form' onSubmit={handleSubmit}>
            <div className="col-md-6">
                <label htmlFor="inputTitle4" className="form-label">Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputTitle4"
                    name='title'
                    onChange={handleChange}
                    value={blogDetails.title}
                    placeholder={blog.title}
                />
            </div>
            <div className="col-md-3">
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
            <div className="col-md-3">
                <label htmlFor="inputDescription" className="form-label">Description</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputDesciption"
                    name='author'
                    onChange={handleChange}
                    value={blogDetails.description}
                />
            </div>
            

            <div className="col-md-6">
                <label htmlFor="inputBody" className="form-label">Body</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputBody"
                    name='body'
                    onChange={handleChange}
                    value={blogDetails.body}
                />
            </div>
            <div className="col-md-6">
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
                <button type="submit" className="btn btn-primary">Update Blog</button>
            </div>
        </form>
    )
}

export default UpdateBlogForm;