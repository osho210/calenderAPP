import React from "react";
import ReactDOM from "react-dom";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import CalendarBoard from "./components/"


dayjs.locale("ja");
const App = () => (
    <div>
        <CalendarBoard />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"));