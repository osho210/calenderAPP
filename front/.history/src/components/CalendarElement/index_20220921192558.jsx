import React from "react";
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";

const CalendarElement = ({ div }) => {
    return (
        <div className={styles.element}>
            <Typography>
                
            </Typography>
            <div className={styles.date}>{children}</div>
        </div>
    );
};

export default CalendarElement;