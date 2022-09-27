import React from "react";
import CalendarElement from "../CalendarElement"
import * as styles from "./style.css";
import {
    ImageList, Typography
} from "@material-ui/core";


const days = ["日", "月", "火", "水", "木", "金", "土"]



const CalendarBoard = ({ calendar, month }) => {
    console.log(calendar)

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
                {calendar.map(date => (
                    <li key={date.toISOString()}>
                        <CalendarElement date={day} month={month} />
                    </li>
                ))}
            </ImageList>
        </div>
    );
};



export default CalendarBoard;