import React from "react";
import ReactDOM from "react-dom";
import CalendarBoard from "./components/CalendarBoard/index"
import { createCalendar } from "./services/calendar"
import { Provider } from "react-redux";
import { createStore } from "redux";



import dayjs from "dayjs";
import "dayjs/locale/ja";
import { Provider } from "react-redux";

dayjs.locale("ja");
const App = () => (
    <Provider store={store}>
        <CalendarBoard />
    </Provider>
)

ReactDOM.render(<App />, document.getElementById("root"));