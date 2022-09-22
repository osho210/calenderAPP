import dayjs from "dayjs";
import { months } from "dayjs/locale/ja";
import { CALENDAR_SET_MONTH }
const day = dayjs();

const init = {
    year: day.year(),
    month: day.month() + 1
}

