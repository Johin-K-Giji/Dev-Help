import React from 'react'
import './page.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='body'>
      <h1 className='logo'>Dev<br></br>Help</h1>

      <div className='section'>
<Link to={'/git'} style={{ textDecoration: 'none' }}><div className='feature'>
    <img src='./gitlogo.png' alt='logo' className='gitlogo'/>
    <p style={{textAlign:"center",fontSize:"20px", fontWeight:"bold" ,color:"black"}}>Git Commands</p>
</div></Link>
<div className='feature'> <p style={{textAlign:"center",fontSize:"20px", fontWeight:"bold"}}>Coming Soon</p></div>
<div className='feature'> <p style={{textAlign:"center",fontSize:"20px", fontWeight:"bold"}}>Coming Soon</p></div>
      </div>
    </div>
  )
}

export default Home
