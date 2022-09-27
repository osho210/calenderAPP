import React from "react";
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import { isSameMonth, isFirstDay, isSomeDay, getMonth } from "../../services/calendar";



const CalendarElement = ({ day, month }) => {
    const currentMonth = getMonth(month);
    const isCurrentMonth = isSameMonth(day, currentMonth);

    const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

    const format = isFirstDay(day) ? "M月D日" : "D";

    const today = dayjs();
    const isToday = isSomeDay(day, today);




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
        </div>
    );
};

export default CalendarElement;




//https://teratail.com/questions/353471