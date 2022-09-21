import React from "react";
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";


const CalendarElement = ({ div }) => {
    return (
        <div className={styles.element}>
            <Typography
                className={styles.date}
                align="center"
                //出力文字のタイプを指定することができる
                variant="caption"
                component="div"
            >
                {/* {day.format("div")} */}
            </Typography>
        </div>
    );
};

export default CalendarElement;