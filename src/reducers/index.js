import { SET_TOTAL_AMOUNT } from '../consts';

export function reducer(state = [], action) {
    switch(action.type) {
        case SET_TOTAL_AMOUNT: {
            // return state + +action.amount
            state = [
                // ...state, {amount: action.amount, item: action.item}
                ...state, {...action.item}
            ];
            console.log(state);
            return state;
        }
        default: return state;
    }
}