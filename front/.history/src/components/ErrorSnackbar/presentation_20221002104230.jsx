import React from "react";
//snackbarはユーザーにエラー情報などを通知するバナー
import { Snackbar, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    message: {
        dispalay: "flex",
        alignItems: "center"
    },
    icons: {
        fontSize: 20
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1)
    }
}))

const ErrorSnackbar = ({error,handleClose})=>{
    const classes = useStyles();

    return(
        <Snackbar 
        open={!!error}
        onClose={handleClose}
        autoHideDuration={3000}
        anchorOrigin={{vertical:"bottom",horizontal:"right"}}
        message={
            <span className={classes.message}>
                
            </span>
        }
    )
}