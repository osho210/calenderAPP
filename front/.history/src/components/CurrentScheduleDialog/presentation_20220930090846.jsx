import React from "react";
import {
    Dialog,
    DialogContent,
    IconButton,
    DialogActions,
    Grid,
    Typography
} from "@material-ui/core";
import { Close, LocationOnOutlined, NotesOutlined } from "@material-ui/icons";

import styles from "./style.css";

const spacer = (top, bottom) => ({
    margin: `${top}px 0 ${bottom}px 0`
})

const currentScheduleCloseDialog = ({
    schedule: { item, isDialogOpen },
    closeDialog
}) => {
    <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
        <DialogActions>

        </DialogActions>
    </Dialog>
}