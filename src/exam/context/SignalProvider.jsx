import React, { useReducer } from 'react'
import { SignalContext } from './SignalContext'
import { signalReducer } from './signalReducer'
import { getSignalsList } from '../functions/getSignalsList'
import { useCounter } from '../hooks/useCounter';

const cantidadSenales = 15;
const cantidadData = 50;
export const SignalProvider = ({children}) => {
    const [state, dispatch] = useReducer(signalReducer, [], ()=>getSignalsList(cantidadSenales, cantidadData))
    const {counter, increment, decrement, setSpecificValue} = useCounter(cantidadSenales)
    return(
        <SignalContext.Provider value={{
            state,
            dispatch,
            cantidadSenales,
            counter,
            increment,
            decrement,
            setSpecificValue
        }}>
            {children}
        </SignalContext.Provider>
    )
}
