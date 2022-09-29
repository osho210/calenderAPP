import React from "react";
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import { isSameMonth, isFirstDay, isSomeDay, getMonth } from "../../services/calendar";
import Schedule from "../Schedule";



const CalendarElement = ({ date, month, Schedules }) => {
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
            <dic className={}
        </div>
    );
};

export default CalendarElement;




//https://teratail.com/questions/353471