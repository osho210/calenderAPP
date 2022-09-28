import React from "react";
import { Dialog, DialogContent } from "@material-ui/core";

const AddSceduleDialog = ({ schedule: { isDialogOpen },closeDi }) => {
    return (
        <Dialog open={isDialogOpen} maxWidth="xs" fullWidth>
            <DialogContent>dialog</DialogContent>
        </Dialog>
    )
}

export default AddSceduleDialog;