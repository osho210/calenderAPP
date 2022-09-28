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
        //クリックしたときに表示させるダイアログ
        <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
            <DialogContent>
                <Title autoFocus fullWidth placeholder="タイトルと日時を追加" />
                <Grid container spacing={1} alignItems="center" justify="space-between" />
                <Grid item>
                    <LocationCityOutlined />
                </Grid>
                <Grid item xs={10}>
                    <TextField style={spacer} fullWidth placeholder="場所を追加" />
                </Grid>
                <Grid item xs={10}>
                    <TextField style={spacer} fullWidth placeholder="説明を追加" />
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button color="primary" variant="outlined">
                    
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddScheduleDialog;