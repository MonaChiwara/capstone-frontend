import { useLocation, useNavigate } from 'react-router-dom'


const UserDetails = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const userDetails = location.state

    // console.log(location.state)

    // console.log(location)



    return (
        <div>
            {/* <img src={userDetails.image} alt="" />
            <p>First Name: {userDetails.firstName}</p>
            <p>Last Name: {userDetails.LastName}</p>
            <p>userDetails Name: {userDetails.userName}</p>
            <p>Bio: {userDetails.biography}</p> */}
            <form className="row g-3" id='create-blog-form'>
                <div className="col-md-3">
                    <label htmlFor="inputFirstName" className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputFirstName"
                        name='firstName'
                        placeholder={userDetails.firstName}
                        value={userDetails.firstName}

                    />
                </div>
                <div className="col-md-3">
                    <label htmlFor="inputLastName" className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputLastName"
                        name='lastName'
                        placeholder={userDetails.lastName}
                        value={userDetails.lastName}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputUserName" className="form-label">userDetails Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputUserName"
                        name='userName'
                        placeholder={userDetails.userName}
                        value={userDetails.userName}
                    />
                </div>
                <div className="col-md-6">
                    <label for="formFile" class="form-label">Profile Picture</label>
                    <input
                        className="form-control"
                        type="file"
                        id="formFile"
                        name='picture'
                    />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Update Blog</button>
                </div>
            </form>
            <button
                className='btn btn-primary'
                onClick={() => navigate(`/user/${userDetails._id}/edit`, { state: userDetails })}
            >
                Update
            </button>
            
        </div>
    );
}

export default UserDetails;