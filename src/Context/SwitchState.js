import Swithcontext from './SwitchContext'
import { useState } from 'react'

const SwitchState = (props) => {
    const swh = {
        calculator: "simpleHash",
        data: {
            c: {
                name: "SimpleHash Calculator",
                definition: "Simple Hash Function is quite Simple as compared to other hash function in this hashing we do the same message bit division by division bits given and the start first xor first block ith second and then result of that is xored with next divblock then again this process go on till last block and last result obtained is printedinto output readonly box"
            }
        }
    }
    const [Switch, setSwitch] = useState(swh)
    const updateSwitch = (switchVal) => {
        switchVal === "simpleHash" ?
            setSwitch({
                calculator: "simpleHash",
                data: {
                    c: {
                        name: "SimpleHash Calculator",
                        definition: "Simple Hash Function is quite Simple as compared to other hash function in this hashing we do the same message bit division by division bits given and the start first xor first block ith second and then result of that is xored with next divblock then again this process go on till last block and last result obtained is printedinto output readonly box"
                    }
                }
            }
            )
            : setSwitch({
                calculator: "circularHash",
                data: {
                    c:
                    {
                        name: "CircularHash Calculator",
                        definition: "Circular Hash Function is quite different as compared to simplehash function in this hashing we do the same message bit division by division bits given But here first we left shift the first div block and then xor it with next division and then again left shift the result then xor with next block do this same process until there is a next block and at last we return without left shift as a result ,the hashcode produced is printed into the output readonly block"
                    }
                }
            })
    }
    return (
        <Swithcontext.Provider value={{ Switch, updateSwitch }}>
            {props.children}
        </Swithcontext.Provider>
    )
}

export default SwitchState;