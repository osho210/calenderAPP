import React from "react";
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";



const CalendarElement = ({ day }) => {
    //月始めの判定
    const isFirstDay = day.date() === 1;
    const format = isFirstDay ? "M月D日" : "D"

    //本日の日付の取得
    const today = dayjs();
    const compoareFormat = "YYYYMMDD"
    const isToday = day.format(compoareFormat) === today.format(compoareFormat)

    //今月以外をスケールアウト
    const isCurrentMonth = day.mo
    return (
        <div className={styles.element}>
            <Typography
                className={styles.date}
                align="center"
                //出力文字のタイプを指定することができる
                variant="caption"
                component="div"
            >
                {/* 日付フォーマットがtodayの場合は処理を実行 */}
                <span className={isToday ? styles.today : ""}>
                    {day.format(format)}
                </span>
            </Typography>
        </div>
    );
};

export default CalendarElement;




//https://teratail.com/questions/353471