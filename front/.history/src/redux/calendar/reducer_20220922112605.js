import dayjs from "dayjs";
import { months } from "dayjs/locale/ja";
const day = dayjs();

const init = {
    year: day.year(),
    month: day.month()
}