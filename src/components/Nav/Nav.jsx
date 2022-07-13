import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = ({ user, setUser, logOut}) => {
    // console.log('user', user)

    const handleLogOut = () => {
        setUser(null)
        logOut()
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                  </button>
                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     
                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                         <li className="nav-item dropdown">
                                 <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 <i className="fa-solid fa-bars" id='ham'></i>
                                 </a>
                                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                      <Link className="dropdown-item" to="/blogs">Blogs</Link>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Resources</a></li>
                                     <li><a className="dropdown-item" href="#about">About</a></li>
                                     <li><a className="dropdown-item" href="#events">Events</a></li>
                                     <li><a className="dropdown-item" href="#connect">Let's Connect</a></li>
                                 </ul>
                             </li>
                             <li>
                                 <Link className="navbar-brand col" to="/" ><img id='logo' src="/logo.png" alt="" /></Link>
                                 </li>
                             
        
                         </ul>

                        {
                            user
                                ?
                                <>
                                    
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/blogs"> </Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link " to="/user">
                                            <img className=" profileImage" src="https://t3.ftcdn.net/jpg/04/95/46/88/360_F_495468869_bcsQviFRMZ2LKTTolIqlaoSoOfkR2kob.jpg" alt="" />
                                        </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={handleLogOut} to="/">Logout</Link>
                                        </li>
                                    </ul>
                                </>
                                :
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/signup">Sign Up</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                </ul>
                        }


                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;