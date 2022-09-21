import React from "react";
import ReactDOM from "react-dom";
import dayjs from "dayjs";
import "dayjs/locale/ja";
imp


dayjs.locale("ja");
const App = () => (
    <div>
        <CalendarBoard />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"));