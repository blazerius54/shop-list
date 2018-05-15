import { ADD_PURCHASE } from '../consts';

export const setTotalAmount = (item, amount) => {
    const action = {
        type: ADD_PURCHASE,
        item: {
            amount,
            ...item
        }
    };
    return action;
}