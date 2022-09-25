import dayjs from "dayjs";
import { CALENDAR_SET_MONTH } from "./actions"
import 


const day = dayjs();

const init = {
    year: day.year(),
    month: day.month() + 1
}

//ationに渡されるコンポーネントの値が変更された場合に処理を実行
const calendarReducer = (state = init, action) => {
    const { type, payload } = action
    switch (type) {
        case CALENDAR_SET_MONTH:
            return payload
        default:
            return state
    }
}

export default calendarReducer