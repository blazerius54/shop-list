import { SET_TOTAL_AMOUNT } from '../consts';

export function reducer(state = 0, action) {
    switch(action.type) {
        case SET_TOTAL_AMOUNT: {
            return state + +action.amount
        }
        default: return state;
    }
}