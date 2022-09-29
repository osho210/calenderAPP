import { SCHEDULES_ADD_ITEM } from "./actions"

//reducerに初期値が格納
const init = {
    items: [],
    isLoading: false
}

const schedulesReducer = (state = init, action) => {
    const { type, payload } = action;

    switch (type){
        case SCHEDULES_ADD_ITEM:
            items:[]
    }
}