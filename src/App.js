import React from 'react'
import LoginWindow from './components/Login Window/LoginWindow'
import Dashboard from './components/Dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div style={{background: "#f5f5f5"}}>
      
      <Routes>
        <Route path='/DashBoard' element={<Dashboard />}/>
        <Route path='login' element={<LoginWindow/>}/>
      </Routes>
    </div>
  )
}
