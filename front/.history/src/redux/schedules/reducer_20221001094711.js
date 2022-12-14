import {
    SCHEDULES_ADD_ITEM,
    SCHEDULES_FETCH_ITEM,
    SCHEDULES_SET_LOADING
} from "./actions"

//reducerに初期値が格納
const init = {
    items: [],
    isLoading: false
};

const schedulesReducer = (state = init, action) => {
    const { type, payload } = action;

    switch (type) {
        case SCHEDULES_ADD_ITEM:
            return {
                ...state,
                items: [...state.items, { ...payload, id: state.items.length + 1 }]
            };
        case SCHEDULES_SET_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case SCHEDULES_FETCH_ITEM:
            return{
                
            }
        default:
            return state;
    }
};

export default schedulesReducer;