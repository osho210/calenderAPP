import React from "react";
import ReactDOM from "react-dom";
import CalendarBoard from "./components/CalendarBoard/index"
import { createCalendar } from "./services/calendar"
import { Provider } from "react";
import { createStore } from "redux";



import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");
const App = () => (
    <div>
        <CalendarBoard />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"));