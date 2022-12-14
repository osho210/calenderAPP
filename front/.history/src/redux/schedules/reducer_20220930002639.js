import { SCHEDULES_ADD_ITEM } from "./actions"

//reducerに初期値が格納
const init = {
    items: [
        {
            id:1,
        }
    ],
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
        default:
            return state;
    }
};

export default schedulesReducer;