import React, { useState } from "react"
import { IconButton, Toolbar, Typography, withStyles } from "@material-ui/core"
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { DatePicker } from "@material-ui/pickers";

const StyledToolbar = withStyles({
  root: { padding: "0" }
})(Toolbar)

const StyledTypography = withStyles({
  root: { margin: "0 30px 0 10px" }
})(Typography)

const StyledDatePicker = withStyles({
  root: { marginLeft: 30 }
})(DatePicker);
//余白の作成
const Navigation = ({ setNextMonth, setPreviousMonth }) => {
  const [selectedDate, handleDateChange] = useState(new Date())
  return (
    <StyledToolbar>
      <StyledDatePicker
        value={selectedDate}
        onChange={handleDateChange}
        variant="inline"
        format="YYYY年 M月"
        animateYearScrolling
        disableToolbar
      />


    </StyledToolbar>
  );
};

export default Navigation;