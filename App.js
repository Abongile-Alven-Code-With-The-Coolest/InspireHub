import './style/style.css'
import React from 'react'
import SideBar from './components/Sidebar'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/Navigation/About'
import Explore from './components/Navigation/Explore'
import FAQ from './style/FAQ'
import SignUp from './components/Navigation/SignUp'
import Login from './components/Navigation/Login'

function App() {

  return (  
    <Router>
    <div>
      <Header/>
      <SideBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
