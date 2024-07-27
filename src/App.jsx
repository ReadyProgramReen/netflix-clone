import React, { useEffect } from 'react'
import Home from './Pages/Home/Home.jsx'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './Pages/Login/Login.jsx'
import PLayer from './Pages/Player/PLayer.jsx'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase.js'

const App = () => {

  const navigate = useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth, async (user)=>{
        if(user){
            console.log("Logged in")
            navigate('/')
        }else{
          console.log("Logged Out");
          navigate('/login')
        }
    })
  },[])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<PLayer/>}/>

      </Routes>
      
    </div>
  )
}

export default App