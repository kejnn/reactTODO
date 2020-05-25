import React, {useReducer} from 'react'
import { AlertContext } from './alertContext.js';
import { alertReducer } from './alertReducer.js';
import { SHOW_ALERT, HIDE_ALERT } from '../types.js';

export const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(alertReducer, {visible: false})

    const show = (text, type='warning') => {
        dispatch({
            type: SHOW_ALERT,
            payLoad: {text, type}
        })
    }

    const hide = () => dispatch({type: HIDE_ALERT})

    return (
        <AlertContext.Provider value={{
            show, hide,
            alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )
}