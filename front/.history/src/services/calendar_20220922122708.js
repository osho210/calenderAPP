import dayjs from "dayjs";

export const createCalendar = month => {
    const firstDay = getMou
    return Array(35)
        .fill(0)
        //value  ,index , array(現在処理している配列を取得)
        .map((_, i) => {
            const diffFromFirstDay = i - firstDayIndex;
            //本日から日付をマイナスして表示
            const day = firstDay.add(diffFromFirstDay, "day")
            return day
        })
};

export const isSomeDay = (d1, d2) => {
    const format = "YYYYMMDD"
    return d1.format(format) === d2.format(format)
}

export const isSameMonth = (m1, m2) => {
    const format = "YYYYMM";
    return m1.format(format) === m2.format(format)
}

export const isFirstDay = day => day.date() === 1