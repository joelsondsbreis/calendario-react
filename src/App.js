import React from "react";
import { Router, Route } from "react-router-dom";
import HomePage from "./HomePage";
import { createBrowserHistory as createHistory } from "history";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
const history = createHistory();
function App({ calendarStore }) {
  return (
    <div>
      <Router history={history}>
        <Navbar bg="primary" expand="lg" variant="dark">
          <Navbar.Brand href="/">Calendário React</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route
          path="/"
          exact
          component={props => (
            <HomePage {...props} calendarStore={calendarStore} />
          )}
        />
      </Router>
    </div>
  );
}
export default App;
