import React from "react";
//snackbarはユーザーにエラー情報を通知するバナー
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