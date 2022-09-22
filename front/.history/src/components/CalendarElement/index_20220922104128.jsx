import React from "react";
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import { isSameMonth, isFirstDay, isSomeDay } from "../../services/calendar";



const CalendarElement = ({ date }) => {

    const today = dayjs()
    const isCurrentMonth = isSameMonth(day, today)
    const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";
    const format = isFirstDay(date) ? "M月D日" : "D"
    const isToday = isSomeDay(day, today)




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
                    {day.format(format)}
                </span>
            </Typography>
        </div>
    );
};

export default CalendarElement;




//https://teratail.com/questions/353471