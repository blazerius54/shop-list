import { ADD_PURCHASE, REQUEST_ITEMS, RECEIVE_ITEMS } from '../consts';

const initialState = {
    isFetching: false,
    items: [],
    purchases: []
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_PURCHASE: {
            // let oldState = state.filter(item=>action.item.id !== item.id);
            return {
                // ...oldState, {...action.item}
                ...state,
                purchases: [
                    ...state.purchases.filter(item=>action.item.id !== item.id), {...action.item}
                ]
            }
        }
        case REQUEST_ITEMS:
        case RECEIVE_ITEMS: 
            return foo(state, action);
        
        default: return state;
    }
}

function foo (state, action) {
    switch(action.type) {
        case REQUEST_ITEMS: {
            state = {
                ...state,
                items: [],
                isFetching: true
            }
            // console.log(state);
            return state;            
        }
        case RECEIVE_ITEMS: {
            state = {
                ...state,
                items: action.items,
                isFetching: false,
            }
            // console.log(state);
            return state;
        }
        default: return state;
    }
}