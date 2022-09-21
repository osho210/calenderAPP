import React from "react";
import { GridList } from "@material-ui/core";
import CalendarElement from "../CalendarElement"
import { createCalendar } from "../../services/calendar";
import * as styles from "./style.css";
const calendar = createCalendar();

const days = ["日", "月", "火", "水", "木", "金", "土"]

const CalendarBoard = () => {
    return (
        //1度
        <div className={styles.container}>
            <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
                {days.map(d => (
                    <li>{d}</li>
                ))}
                {calendar.map(c => (
                    <li key={c.toISOString()}>
                        <CalendarElement day={c} />
                    </li>
                ))}
            </GridList>
        </div>
    );
};



export default CalendarBoard;