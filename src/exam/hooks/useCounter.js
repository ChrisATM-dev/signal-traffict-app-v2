import { useState } from 'react'

export const useCounter = (maxValue) => {
    const [counter, setCounter] = useState(1)

    const increment = () => {
        if(counter < maxValue) {
            setCounter(counter + 1)
        }
    }

    const decrement = () => {
        if(counter > 1) {
            setCounter(counter - 1)
        }
    }

    const setSpecificValue = (value) => {
        if (value >= 1 && value <= maxValue) {
            setCounter(value);
        }else{
            return;
        }
    }

    return {
        counter,
        increment,
        decrement,
        setSpecificValue
    }
}
