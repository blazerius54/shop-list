import { ADD_PURCHASE, REQUEST_ITEMS, RECEIVE_ITEMS } from '../consts';
import { combineReducers } from 'redux'

export function purchasesReducer(state = [], action) {
    switch (action.type) {
        case ADD_PURCHASE:
            return  [...state.filter(item => action.item.id !== item.id), action.item ]
        default: return state;
    }
}

export function shopReducer(state = {isFetching: false, items: []}, action) {
    switch (action.type) {
        case REQUEST_ITEMS:
        case RECEIVE_ITEMS:
            return setItems(state, action);
        default: return state;
    }
}

function setItems(state, action) {
    switch (action.type) {
        case REQUEST_ITEMS:
            return {
                items: [],
                isFetching: true
            }
        case RECEIVE_ITEMS:
            return {
                items: [...action.items],
                isFetching: false,
            }
        default: return state;
    }
}

export const reducer = combineReducers({
    shopItems: shopReducer,
    purchases: purchasesReducer
})