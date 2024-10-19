import React from 'react'
import logoo from '../assets/logoo.jpg'
import { Link, NavLink,useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='navbar'>
        <img src={logoo} alt="" srcset="" width="50px"/>
        <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/products'><li>Products</li></NavLink>
            <NavLink to='/about'><li>About</li></NavLink>
            <NavLink to='/contact'><li>Contact</li></NavLink>
            <NavLink to='/jobs'><li>Jobs</li></NavLink>
            
        </ul>

        <button onClick={()=>navigate('/about',{replace:true})}>Get Started</button>
    </div>
  )
}

export default Navbar