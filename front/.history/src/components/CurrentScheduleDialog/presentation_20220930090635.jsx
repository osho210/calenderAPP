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

const spacer =(top,bottom)=>({
    margin:`${top}px `
})