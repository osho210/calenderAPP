//typeの宣言
import {
    ADD_SCHEDULE_SET_VALUE,
    ADD_SCHEDULE_OPEN_DIALOG,
    ADD_SCHEDULE_CLOSE_DIALOG
} from "./actions";


const init = {
    //formが開いているか
    form: {
        title: "",
        description,
        date: null,
        location: ""
    },
    // dialogが開いているか
    isDialogOpen: false
}

// この処理はimportなしで動くのか
const addSchedule