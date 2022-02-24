import React, { useContext } from 'react'
import CalculatorInfo from './CalculatorInfo'
import SimpleHash from './SimpleHash'
import CircularHash from './CircularHash'
import SwitchContext from '../Context/SwitchContext'

const Calculator = () => {
  const calc = useContext(SwitchContext)
  return (
    <div className='home'>
      <CalculatorInfo/>
      {calc.Switch.calculator === "simpleHash"
        ? <SimpleHash/>
        : <CircularHash/>
      }      
    </div>
  )
}

export default Calculator