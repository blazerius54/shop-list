import { ADD_PURCHASE } from '../consts';

export function reducer(state = [], action) {
    switch(action.type) {
        case ADD_PURCHASE: {
            let oldState = state.filter(item=>action.item.id !== item.id);
            return [
                ...oldState, {...action.item}
            ];
        }
        default: return state;
    }
}