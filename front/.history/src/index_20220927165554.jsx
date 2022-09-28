import React from "react";
import ReactDOM from "react-dom";
import CalendarBoard from "./components/CalendarBoard/container"
import { Provider } from "react-redux";
import { createStore } from "redux";
import dayjs from "dayjs";
import 'dayjs/locale/ja'
import rootReducer from "./redux/rootReducer"
import Navigation from "./components/Navigation/presentation"
import DateFnsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

dayjs.locale("ja");
const store = createStore(rootReducer)

const App = () => (
    <Provider store={store}>
        //
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Navigation />
            <CalendarBoard />
        </MuiPickersUtilsProvider>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById("root"));