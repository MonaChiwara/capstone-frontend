import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

// Pages
import Home from '../Home/Home';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp'
import Blogs from '../Blogs/Blogs'

// Services
import * as usersService from '../../utilities/users-service'
// CSS
import './App.css';

const App = () => {
  const [user, setUser] = useState('')

  useEffect(() => {
    if (usersService.getToken()) setUser(usersService.getUser())
  }, [])

  return (
    <div className="App">
      <Nav user={user} setUser={setUser} logOut={usersService.logOut} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setUser={setUser}/>} />
        <Route path='/signup' element={<SignUp setUser={setUser}/>} />

        {
          user &&
          <>
            <Route path='/blogs' element={<Blogs />} />
            {/* <Route path='/blogs/create' element={<CreateBlog />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
            <Route path='/blogs/:id/edit' element={<UpdateBlogForm />} /> */}
          </>
        }
        
        
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
