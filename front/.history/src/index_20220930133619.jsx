import React from "react";
import ReactDOM from "react-dom";
import CalendarBoard from "./components/CalendarBoard/container"
import { Provider } from "react-redux";
import { createStore } from "redux";
import dayjs from "dayjs";
import 'dayjs/locale/ja'
import rootReducer from "./redux/rootReducer"
import Navigation from "./components/Navigation/container"
import DateFnsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import AddScheduleDialog from "./components/AddScheduleDialog/container"
import CurrentScheduleDialog

dayjs.locale("ja");
const store = createStore(rootReducer)

const App = () => (
    <Provider store={store}>
        {/* MuiPickersUtilsProvidertと接続す */}
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Navigation />
            <CalendarBoard />
            <AddScheduleDialog />
        </MuiPickersUtilsProvider>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById("root"));