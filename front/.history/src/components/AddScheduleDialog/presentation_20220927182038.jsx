import React from "react";
import { Dialog, DialogContent } from "@material-ui/core";

const AddSceduleDialog = ({schedule:{isDialog} }) => {
    return (
        <Dialog open={true} maxWidth="xs" fullWidth>
            <DialogContent>dialog</DialogContent>
        </Dialog>
    )
}

export default AddSceduleDialog;