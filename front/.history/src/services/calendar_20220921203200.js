import dayjs from "dayjs";

export const createCalendar = () => {
    const firstDay = dayjs().startOf("month");
    const firstDayIndex = firstDay.day();
    return Array(35)
        .fill(0)
        .map((_, i) => {
            const diffFromFirstDay = i - firstDayIndex;
            const day = firstDay.add(diffFromFirstDay, "day")
            return day
        })
};

export const isSomeDay = (d1, d2) => {
    const format = "YYYYMMDD"
    return d1.format(format) === d2.format(format)
}

export const isSameMonth=(m1,m2)=>{
    const format = "YYYY"
}