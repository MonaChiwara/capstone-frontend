import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'


const User = ( ) => {
    const location = useLocation()
    const user = location.state
   
    const [User, setUser] = useState(user)

    const navigate = useNavigate()

    // useEffect(() => {
    //     // console.log('hey')
    //     (async () => {
    //         const userRes = await getUser()
    //         setUser(userRes.data)
    //         console.log('hi', userRes.data)
    //     })()
    // }, [])

    useEffect(() => {
const fetchUser = async () => {
    const res = await getUser()
    setUser(res.data)
    console.log('hi', res.data)
}
fetchUser()
    }, [])

    return (
        <div className="h-100" id='user-wrapper'>
            <form className="row g-3" id='create-blog-form'>
            <div className="col-md-6">
                    <label htmlFor="inputFirstName" className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputFirstName"
                        name='firstName'
                        // placeholder={User.userName}
                        // value={User.userName}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputLastName" className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputLastName"
                        name='lastName'
                        // placeholder={User.userName}
                        // value={User.userName}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputUserName" className="form-label">User Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputUserName"
                        name='userName'
                        // placeholder={User.userName}
                        // value={User.userName}
                    />
                </div>
                
                
                <div className="col-md-6">
                    <label htmlFor="formFile" className="form-label">Profile Picture</label>
                    <input
                        className="form-control"
                        type="file"
                        id="formFile"
                        name='picture'

                    />
                </div>
                
            </form>
            
<Link className="btn btn-primary" to='/'>Update Profile</Link>

        </div>
    );
}



export default User;



