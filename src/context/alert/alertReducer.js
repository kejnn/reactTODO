import { SHOW_ALERT, HIDE_ALERT } from '../types.js';

const handlers = {
    [SHOW_ALERT]: (state, {payLoad}) => ({...payLoad, visible: true}),
    [HIDE_ALERT]: state => ({...state, visible: false}),
    DEFAULT: state => state
}

export const alertReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}