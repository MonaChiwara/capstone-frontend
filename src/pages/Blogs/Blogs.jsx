import { useState, useEffect } from 'react'
import { getBlogs } from '../../utilities/blogs-service'
import { Link, useNavigate } from 'react-router-dom'
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        // console.log('hey')
        (async () => {
            const blogsRes = await getBlogs()
            setBlogs(blogsRes.data)
            
        })()
    }, [])
  
    return (
        <div className="h-100" id='blog-wrapper'>
            <div className='navbarblog' >
<ul className='navbarullist'>
    <li className='navbarlist'><a href="#story"> My Story</a></li>
    <li className='navbarlist'><a href="#swe">Software Engineer</a></li>
    <li className='navbarlist'><a href="#pm">Program Manager</a></li>
    <li className='navbarlist'><a href="#ds">Data Science</a></li>
    <li className='navbarlist'><a href="#cs">Cybersecurity</a></li>
    <li className='navbarlist'><a href="#ux">UX/UI Designer</a></li>
    

</ul>
            </div>
            
            <div id='blog-container'>
                {
                    blogs.map(blog =>
                        <div 
                            className="card" 
                            id='blog-card'
                            key={blog._id}
                            onClick={() => navigate(`/blogs/${blog._id}`, { state: blog })}
                        >
                            <img src={blog.image} className="card-img-top" alt={`Blog poster: ${blog.title}`} id='blog-poster' />
                            <div className="card-body">
                                <h5 className="card-title">{blog.title}</h5>
                                <p className="card-text">{blog.author}</p>
                                <p className="card-text">{blog.description}</p>
                            </div>
                        </div>
                    )
                }

            </div>
            <Link className="btn btn-primary" to='/blogs/create'>Add Blog</Link>

        </div>
    );
}



export default Blogs;
