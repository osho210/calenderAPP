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

    import {Lo}

const AddScheduleDialog = ({ schedule: { isDialogOpen }, closeDialog }) => {
    return (
        <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
            <DialogContent>dialog</DialogContent>
        </Dialog>
    )
}

export default AddScheduleDialog;