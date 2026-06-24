import React from 'react'
import Header from './pages/header/header.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import { Route, Routes } from 'react-router-dom'
import NoMatch from './pages/noMatch/NoMatch.jsx'
import PostUser from './pages/employee/PostUser.jsx'
import UpdateUser from './pages/employee/UpdateUser.jsx'

const App = () => {
  return (
    <>
     <Header/> 
     <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/employee' element={<PostUser/>}/>
      <Route path='/employee/:id' element={<UpdateUser/>}/>
      <Route path='*' element={<NoMatch/>}/>
     </Routes>
    </>
  )
}

export default App