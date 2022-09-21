import React from "react";
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import { isSameMonth, isSameDay, isFirstDay, isSomeDay } from "../../services/calendar";



const CalendarElement = ({ day }) => {

    const format = isFirstDay(day) ? "M月D日" : "D"



    const isToday = isSomeDay(day)? "M月D日":""

    const isCurrentMonth = isSameMonth(day, today)
    const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

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