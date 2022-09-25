import React from "react"
import { IconButton, Toolbar, Typography, withStyles } from "@material-ui/core"
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";

const StyledToolbar = withStyles({
    root:{padding:"0"}
})(Toolbar)

const StyledTypog

//余白の作成
const Navigation = () => {
    return (
        <Toolbar>
            <IconButton>
                <DehazeIcon />
            </IconButton>
            <img src="/images/calendar_icon.png" width="40" height="40" />
            <Typography color="textSecondary" variant="h5" component="h1">
                カレンダー
            </Typography>
            <IconButton size="small">
                <ArrowBackIos />
            </IconButton>
            <IconButton size="small">
                <ArrowForwardIos />
            </IconButton>
        </Toolbar>
    )
}

export default Navigation