import { SET_TOTAL_AMOUNT } from '../consts';

export const setTotalAmount = (amount) => {
    const action = {
        type: SET_TOTAL_AMOUNT,
        amount
    };
    return action;
}