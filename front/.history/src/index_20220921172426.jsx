import React from "react";
import ReactDOM from "react-dom";
import CalendarElement from "../CalendarElement";
import { createCalendar } from "../../services/calendar";

dayjs.locale("ja");
const App = () => (
    <div>
        <CalendarBoard />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"));