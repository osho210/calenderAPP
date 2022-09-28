import React from "react";
import {
    Dialog,
    DialogContent,
    TextField,
    DialogActions,
    Button,
    Input,
    Grid
}
    from "@material-ui/core";
//ロゴのインポート
import { LocationCityOutlined, NotesOutlined } from "@material-ui/icons";
//Bootstrapのようなculom
import { withStyles, WithStyles } from "@material-ui/core/styles";

const spacer = { margin: "4px 0" };

const Title = withStyles({
    root: { marginBottom: 32, fontSize: 22 }
})(Input)

const AddScheduleDialog = ({ schedule: { isDialogOpen }, closeDialog }) => {
    return (
        //
        <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
            <DialogContent>

            </DialogContent>
        </Dialog>
    )
}

export default AddScheduleDialog;