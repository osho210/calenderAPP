import React from "react";
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import { isSameMonth, isFirstDay, isSomeDay, getMonth } from "../../services/calendar";
import Schedule from "../Schedule";



const CalendarElement = ({ date, month, schedules }) => {
    const currentMonth = getMonth(month)
    const isCurrentMonth = isSameMonth(date, currentMonth)
    const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

    const format = isFirstDay(date) ? "M月D日" : "D"

    const today = dayjs()
    const isToday = isSomeDay(date, today)


    return (
        <div className={styles.element}>
            <Typography
                className={styles.date}
                color={textColor}
                align="center"

                variant="caption"
                component="div"
            >
                <span className={isToday ? styles.today : ""}>
                    {date.format(format)}
                </span>
            </Typography>
            <div className={styles.schedules} >
                {schedules.map(e => (
                    <Schedule key={e.id} schedule={e} />
                ))}
            </div>
        </div>
    );
};

export default CalendarElement;




