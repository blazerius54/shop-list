import { ADD_PURCHASE, REQUEST_ITEMS, RECEIVE_ITEMS } from '../consts';
import { combineReducers } from 'redux'

const initialState = {
    isFetching: false,
    items: [],
}

export function purchases(state = [], action) {
    switch (action.type) {
        case ADD_PURCHASE:
            return {
                ...state,
                purchases: [
                    ...state.purchases.filter(item => action.item.id !== item.id), { ...action.item }
                ]
            }
        default: return state;
        }
}

export function shopItems(state = initialState, action) {
    switch (action.type) {
        case REQUEST_ITEMS:
        case RECEIVE_ITEMS:
        // console.log(action) 
            return foo(state, action);
        default: return state;
    }
}

function foo(state, action) {
    // console.log(action.items)
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
    shopItems,
    purchases
  })
  
//   export default reducer;