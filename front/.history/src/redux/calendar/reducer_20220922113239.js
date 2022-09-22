import dayjs from "dayjs";
import { month } from "dayjs/locale/ja";
import { CALENDAR_SET_MONTH } from "./actions"
const day = dayjs();

const init = {
    year: day.year(),
    month: day.month() + 1
}

