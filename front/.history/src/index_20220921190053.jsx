import React from "react";
import ReactDOM from "react-dom";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import CalendarBoard from "./components/CalendarBoard/index"
import createCalendar from "./services/"


dayjs.locale("ja");
const App = () => (
    <div>
        <CalendarBoard />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"));