import { SET_TOTAL_AMOUNT } from '../consts';

export const setTotalAmount = (item, amount) => {
    const action = {
        type: SET_TOTAL_AMOUNT,
        item: {
            amount,
            ...item
        }
        // id,
        // amount
    };
    console.log(action)
    return action;
}