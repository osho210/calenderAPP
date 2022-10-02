import React from "react";
import ReactDOM from "react-dom";
import CalendarBoard from "./components/CalendarBoard/container"
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import dayjs from "dayjs";
import 'dayjs/locale/ja'
import rootReducer from "./redux/rootReducer"
import Navigation from "./components/Navigation/container"
import DateFnsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import AddScheduleDialog from "./components/AddScheduleDialog/container"
import CurrentScheduleDialog from "./components/CurrentScheduleDialog/container";
import ErrorSnackbar from "./components/ErrorSnackbar/contaienr"

dayjs.locale("ja");
const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => (
    <Provider store={store}>
        {/* MuiPickersUtilsProvidertと接続す */}
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Navigation />
            <CalendarBoard />
            <AddScheduleDialog />
            <CurrentScheduleDialog />
            <ErrorSnackbar />
        </MuiPickersUtilsProvider>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById("root"));