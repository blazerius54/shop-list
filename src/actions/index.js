import { ADD_PURCHASE, REQUEST_ITEMS, RECEIVE_ITEMS } from '../consts';

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

export const requestItems = () => {
    const action = {
        type: REQUEST_ITEMS,
    };
    return action;
}

export const receiveItems = (items) => {
    const action = {
        type: RECEIVE_ITEMS,
        items,
    }
    console.log(items)
    return action;
}

export function fetchItems() {
    return dispatch => {
        dispatch(requestItems());
        return fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(parsedJSON => dispatch(receiveItems(
                parsedJSON.slice(0, 9)
                .map(item=>{
                    return {
                      title: item.title,
                      imgSrc: item.thumbnailUrl,
                      id: item.id
                    }
                })
            ))

            )
    }
}