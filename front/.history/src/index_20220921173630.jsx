import React from "react";
import ReactDOM from "react-dom";
import dayjs from "dayjs";
import "dayjs/locale/ja";


dayjs.locale("ja");
const App = () => (
    <div>
        console.log("manko")
        <CalendarBoard />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"));