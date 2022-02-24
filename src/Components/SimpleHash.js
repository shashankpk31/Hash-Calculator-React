import React, { useState } from 'react'
import {calcSimpleHash} from "./Logic" 

const SimpleHash = () => {
    const [state, setState] = useState({
        messageBit: "",
        divisionBit: "",
        result: ""
    })
    const handleChange=(evt)=> {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    const handleCalculate=()=> {
        const result = calcSimpleHash(state.messageBit.toString(),parseInt(state.divisionBit));
        setState({
            ...state,
            "result": result
        });
    }
    
    return (
        <div className='calcform'>
            <div className='input my-2'>
                <input type="text" name="messageBit" placeholder='First name' value={state.messageBit} onChange={handleChange} />
            </div>
            <div className='input my-2'>
                <input type="Number" name="divisionBit" placeholder='Last name' value={state.divisionBit} onChange={handleChange} />
            </div>
            <button type='button' onClick={handleCalculate}>Calculate</button>
            <div className='input my-2'>
                <input type="Number" name="result" placeholder='Hash value' value={state.result}  readOnly />
            </div>
        </div>
    )
}

export default SimpleHash