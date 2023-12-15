import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from "./pages/Home.jsx"
import SignUp from "./pages/SignUp.jsx"
import SignIn from "./pages/SignIn.jsx"
import About from './pages/About.jsx'
import Profile from './pages/Profile.jsx'

import Nav from "./components/Nav.jsx"
import PrivateRouter from './components/PrivateRouter.jsx'

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route element={<PrivateRouter />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={()=>{console.log("error 404 not found")}} />


        </Routes>
      </Router>


    </div>
  )
}

export default App