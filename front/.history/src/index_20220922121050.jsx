import React from "react";
import ReactDOM from "react-dom";
import CalendarBoard from "./components/CalendarBoard/"
import { createCalendar } from "./services/calendar"
import { Provider } from "react-redux";
import { createStore } from "redux";



import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");
const App = () => (
    <Provider store={store}>
        <CalendarBoard />
    </Provider>
)

ReactDOM.render(<App />, document.getElementById("root"));