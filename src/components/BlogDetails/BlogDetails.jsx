import { useLocation, useNavigate } from 'react-router-dom'
import { deleteBlog } from '../../utilities/blogs-service'

const BlogDetails = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const blogDetails = location.state

    // console.log(location.state)

    // console.log(location)

    const handleDelete = async () => {
        try {
            const res = await deleteBlog(blogDetails._id)
            if (res.status === 200) navigate('/blogs')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <img src={blogDetails.image} alt="" />
            <p>Title: {blogDetails.title}</p>
            <p>Author: {blogDetails.author}</p>
            <button
                className='btn btn-primary'
                onClick={() => navigate(`/blogs/${blogDetails._id}/edit`, { state: blogDetails })}
            >
                Edit
            </button>
            
            <button 
            type="button" 
            class="btn btn-warning"
            onClick={() => navigate(`/blogs/${blogDetails._id}/edit`, { state: blogDetails })}
            >
            Add Comment
            </button>
            
            <button
                className='btn btn-danger'
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    );
}

export default BlogDetails;