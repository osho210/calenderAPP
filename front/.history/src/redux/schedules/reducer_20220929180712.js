import { SCHEDULES_ADD_ITEM } from "./actions"

//reducerに初期値が格納
const init = {
    items: [],
    isLoading: false
}

const schedulesReducer = (state=init)