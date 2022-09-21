import React from "react";
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";

const today = dayjs();
const compoareFormat = "YYYYMMDD"
const isToday = day.format(compoareFormat) === today.format(compoareFormat)

const CalendarElement = ({ day }) => {
    const isFirstDay = day.date() === 1;
    const format = isFirstDay ? "M月D日" : "D"

    return (
        <div className={styles.element}>
            <Typography
                className={styles.date}
                align="center"
                //出力文字のタイプを指定することができる
                variant="caption"
                component="div"
            >
                <span className={isToday}></span>
                {day.format(format)}
            </Typography>
        </div>
    );
};

export default CalendarElement;