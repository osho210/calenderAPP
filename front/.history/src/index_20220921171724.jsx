import React from "react";
import ReactDOM from "react-dom";
import dayjs from "dayjs";
import CalendarBoard from "./components/CalendarBoard";

const App = () => (
    <div>
        <CalendarBoard />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"));