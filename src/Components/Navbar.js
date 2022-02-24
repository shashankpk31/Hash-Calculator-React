import React, { useContext } from 'react'
import SwitchContext from '../Context/SwitchContext'
import logo from './calculatorlogo.png'

const Navbar = () => {
  const Switch = useContext(SwitchContext)
  const switchSimpleHash = () => {
    Switch.updateSwitch("simpleHash")
  }
  const switchCircularHash = () => {
    Switch.updateSwitch("circularHash")
  }
  return (
    <nav className='Navbar'>
      <div className='logo'>
        <img src={logo} id="logo" alt='logo' />
        <p>Hash Calculator</p> </div>
      <div className='Navitems float-right'>
        <button className='mx-2' onClick={switchSimpleHash}>SimpleHash</button>
        <button className='mx-2' onClick={switchCircularHash}>CircularHash</button>
      </div>

    </nav>
  )
}

export default Navbar