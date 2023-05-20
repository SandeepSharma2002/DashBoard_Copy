import React from 'react'
import LoginWindow from './components/Login Window/LoginWindow'
import Dashboard from './components/Dashboard/Dashboard'
import { Routes ,Route } from 'react-router'

export default function App() {
  return (
    <div style={{background: "#f5f5f5"}}>
     
      <Dashboard/>
      <Routes>
        <Route path="dashboard" element= { <LoginWindow/>}/>
      </Routes>
      
    </div>
  )
}
