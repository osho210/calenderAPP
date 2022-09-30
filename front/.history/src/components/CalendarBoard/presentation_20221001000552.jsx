import React from "react";
import CalendarElement from "../CalendarElement"
import * as styles from "./style.css";
import {
    ImageList, Typography
} from "@material-ui/core";


const days = ["日", "月", "火", "水", "木", "金", "土"]


//値が変更された場合に再レンダリングされていない
const CalendarBoard = ({ calendar, month, openAddScheduleDialog, openCurrentScheduleDialog }) => {
    return (
        <div className={styles.container}>
            <ImageList className={styles.grid} cols={7} gap={0} rowHeight="auto">
                {days.map(day => (
                    <li key={day}>
                        <Typography
                            className={styles.days}
                            color="textSecondary"
                            align="center"
                            variant="caption"
                            component="div"
                        >
                            {day}
                        </Typography>
                    </li>
                ))}

                {calendar.map(({ date, schedules }) => (
                    //consoleは出力されるので関数呼び出しができていない
                    <li key={date.toISOString()}
                        onClick={() => openAddScheduleDialog(date)}>
                        {/* プロパティの1部変更(date = {date}) */}
                        <CalendarElement date={date} month={month} schedules={schedules} onClickSchedule={openCurrentScheduleDialog} />
                    </li>
                ))}
            </ImageList>
        </div>
    );
};



export default CalendarBoard;