import React from "react";
//snackbarはユーザーにエラー情報などを通知するバナー
import { Snackbar, IconButton } from "@material-ui/core";
import { Close, Warning } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
    message: {
        dispalay: "flex",
        alignItems: "center"
    },
    icon: {
        fontSize: 20
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1)
    }
}))

const ErrorSnackbar = ({ error, handleClose }) => {
    const classes = useStyles();

    return (
        <Snackbar
            //errorがある場合は表示 なければ非表示
            open={!!error}
            //閉じるボタンを押すと関数をリセットする
            onClose={handleClose}
            // 自動で閉じる時間
            autoHideDuration={3000}
            // どの位置からポップアップを表示するかを指定する
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            message={
                <span className={classes.message}>
                    <Warning className={[classes.icon, classes.iconVariant].join(" ")} />
                    {error}
                </span>
            }
            action={
                <IconButton color="inherit" onClick={handleClose}>
                    <Close className={classes.icon} />
                </IconButton>
            }
        />
    )
}


export default ErrorSnackbar;