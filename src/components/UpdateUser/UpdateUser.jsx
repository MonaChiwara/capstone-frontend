import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import * as usersService from '../../utilities/users-service'

const UpdateUserForm = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const user = location.state

    const [userDetails, setUserDetails] = useState(user)

    // console.log(location.state)

    const handleChange = e => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await usersService.updateUser(userDetails)
            // console.log(res)
            if (res.status === 200) navigate(`/user/${userDetails.id}`, { state: userDetails })
        } catch (e) {
            console.log(e)
        }
    }

  
    return (
        <form className="row g-3" id='create-user-form' onSubmit={handleSubmit}>
            <div className="col-md-6">
                <label htmlFor="inputFirstName" className="form-label">First Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputFirstName"
                    name='firstName'
                    onChange={handleChange}
                    value={user.firstName}
                    placeholder={user.firstName}
                />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputLastName" className="form-label">Last Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputlastName"
                    name='LastName'
                    onChange={handleChange}
                    value={user.LastName}
                    placeholder={user.LastName}
                />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputUserName" className="form-label">User Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputUserName"
                    name='userName'
                    onChange={handleChange}
                    value={user.userName}
                    placeholder={user.userName}
                />
            </div>
            
            
            

            <div className="col-md-6">
                <label htmlFor="inputImage" className="form-label">Profile Picture</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputImage"
                    name='image'
                    onChange={handleChange}
                    value={userDetails.image}
                />
            </div>

          

    

            <div className="col-md-2">
                <label htmlFor="inputBiography" className="form-label">Bio</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputBiography"
                    name='biography'
                    onChange={handleChange}
                    value={userDetails.biography}
                />
            </div>

            <div className="col-12">
                <button type="submit" className="btn btn-primary">Update Profile</button>
            </div>
        </form>
    )
}

export default UpdateUserForm;