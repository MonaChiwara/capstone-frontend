import { useState } from 'react'
import { signUp } from '../../utilities/users-service'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './SignUp.css'

const SignUp = ({ setUser }) => {
    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        repassword: '',
       
    });

    const navigate = useNavigate()

    const handleChange = e => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const user = await signUp(newUser)
            setUser(user)
            if (user) navigate('/user')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <section className="h-100 " id='signup'>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card card-registration my-4">
                            <div className="row g-0">

                                <form className="col-xl-6" onSubmit={handleSubmit} id='formSignUp'>
                                    <div className="card-body p-md-5 text-black">
                                        <h3 className="mb-5 text-uppercase">Sign Up</h3>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        id="form3Example1m"
                                                        className="form-control form-control-lg"
                                                        name='firstName'
                                                        value={newUser.firstName}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <label className="form-label" htmlFor="form3Example1m">First name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        id="form3Example1n"
                                                        className="form-control form-control-lg"
                                                        name='lastName'
                                                        value={newUser.lastname}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <label className="form-label" htmlFor="form3Example1n">Last name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        id="form3Example1n"
                                                        className="form-control form-control-lg"
                                                        name='userName'
                                                        value={newUser.userName}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <label className="form-label" htmlFor="form3Example1n">User Name</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">

                                            {/* <div className=" mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        id="form3Example1n1"
                                                        className="form-control form-control-lg"
                                                        name='biography'
                                                        value={newUser.biography}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" htmlFor="form3Example1n1">Biography</label>
                                                </div>
                                            </div> */}

                                            {/* <div className=" mb-3">
                                                             <div class="mb-3">
                                                    <label for="formFile" class="form-label">Profile Picture</label>
                                                    <input
                                                        className="form-control"
                                                        type="file"
                                                        id="formFile"
                                                        name='picture'
                                                        value={newUser.picture}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div> */}
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input
                                                type="email"
                                                id="form3Example8"
                                                className="form-control form-control-lg"
                                                name='email'
                                                value={newUser.email}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label className="form-label" htmlFor="form3Example8">Email</label>

                                            <input
                                                type="password"
                                                id="form3Example9"
                                                className="form-control form-control-lg"
                                                name='password'
                                                value={newUser.password}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label className="form-label" htmlFor="form3Example9">Password</label>

                                            <input
                                                type="password"
                                                id="form3Example10"
                                                className="form-control form-control-lg"
                                                name='repassword'
                                                value={newUser.repassword}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label className="form-label" htmlFor="form3Example10">Re-type Password</label>
                                        </div>
                                    </div>

                                    <button className='btn btn-primary' type='submit'>SignUp</button>
                                </form>
                                <Link to='/login'>
                                    Already have an account? Sign In
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default SignUp;