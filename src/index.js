import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { CalendarStore } from "./store";
const calendarStore = new CalendarStore();
ReactDOM.render(
  <App calendarStore={calendarStore} />,
  document.getElementById("root")
);
serviceWorker.unregister();