export const createCalendar = () => {
    const firstDay = dayjs().startOf("month");
    const firstDayIndex = firstDay.day();
    console.log("tsevies")
    return Array(35)
        .fill(0)
        .map((_, i) => {
            const diffFromFirstDay = i - firstDayIndex;
            const day = firstDay.add(diffFromFirstDay, "day")
            return day
        })


};
