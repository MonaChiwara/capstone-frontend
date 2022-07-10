import { useState, useEffect } from 'react'
import { getBlogs } from '../../utilities/blogs-service'


const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        // console.log('hey')
        (async () => {
            const blogsRes = await getBlogs()
            setBlogs(blogsRes.data)
        })()
    }, [])
  
    return (
        <div>
            this is our blog page
        </div>
    );
}



export default Blogs;
