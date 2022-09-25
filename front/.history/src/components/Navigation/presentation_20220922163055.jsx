import React from "react"
import { IconButton, Toolbar, Typography } from "@material-ui/core"
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";

const Navigation = () => {
    return (
        <Toolbar>
            <IconButton>
                <DehazeIcon>
                </DehazeIcon>
            </IconButton>
            <img src="/images/calendar_icon.png" width="40" height="40" />
            <Typography color="textSecondary" variant="5" component="1">
                カレンダー
            </Typography>
            <IconButton size="small">
                <ArrowForwardIos />
            </IconButton>
            <IconButton size="small">
                <ArrowForwardIos />
            </IconButton>
        </Toolbar>
    )
}

export default Navigation