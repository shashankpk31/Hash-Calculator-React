import React, { useContext } from 'react'
import SwitchContext from '../Context/SwitchContext'
import home from './calculatorhome2.png'
// import home1 from './calculatorhome.png'

const CalculatorInfo = () => {
  const Switch=useContext(SwitchContext)
  const switchCalculator=()=>{
    Switch.Switch.calculator==="simpleHash"?Switch.updateSwitch("circularHash"):Switch.updateSwitch("simpleHash")
  }
  return (
    <div className='defineCont'>
        <p>{Switch.Switch.data.c.name}</p>
        <p>{Switch.Switch.data.c.definition}</p>
        <button onClick={switchCalculator}>Switch Calculator</button>
        <img className='infoimg' src={home}  alt='homeimg'/>
    </div>
  )
}

export default CalculatorInfo