import React from "react";
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import { isSameMonth, isFirstDay, isSomeDay, getMonth } from "../../services/calendar";



const CalendarElement = ({ day, month }) => {
    // 今月以外をグレーダウン

    // ==========ここから編集する==========
    const currentMonth = getMonth(month);
    const isCurrentMonth = isSameMonth(day, currentMonth);

    const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";
    // ==========ここまで編集する==========

    // 文字列のフォーマットをどうするか
    // 月の最初だけ月情報をつける
    const format = isFirstDay(day) ? "M月D日" : "D";

    const today = dayjs();
    const isToday = isSameDay(day, today);




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