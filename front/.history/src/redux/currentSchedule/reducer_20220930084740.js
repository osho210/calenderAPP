//action接続のためのtype
import {
    CURRENT_SCHEDULE_SET_ITEM,
    CURRENT_SCHEDULE_OPEN_DIALOG,
    CURRENT_SCHEDULE_CLOSE_DIALOG
} from "./actions"

const init = {
    item: null,
    isDialogOpen: false
}