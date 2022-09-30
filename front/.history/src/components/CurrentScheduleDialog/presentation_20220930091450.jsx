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
            <div className={styles.closeButton}>
                <IconButton onClick={closeDialog} size="small">
                    <Close />
                </IconButton>
            </div>
        </DialogActions>
        <DialogContent>
            {item && (
                <>
                    <div>
                        <Grid container spacing={1} alignItems="center" justify="space-between" style={spacer(0, 30)} >
                            <Glid item>
                                <span
                            </Glid>

                        </Grid>
                    </div>
                </>
            )}
        </DialogContent>
    </Dialog>
}