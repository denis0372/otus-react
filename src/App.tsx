import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LoginScreen } from "@/screens/LoginScreen";
import { ConditionsScreen } from "@/screens/ConditionsScreen";
import { NoMatchScreen } from "@/screens/NoMatchScreen";
import { UserScreen } from "@/screens/UserScreen";
import "@/styles.css";

export const App: React.FC<{}> = () => (
  <Router>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/conditions">Conditions Editor</Link>
          </li>
          <li>
            <Link to="/user/Denis">Denis</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <Route path="/conditions" component={ConditionsScreen} />
        <Route path="/user/:name" component={UserScreen} />
        <Route path="*">
          <NoMatchScreen />
        </Route>
      </Switch>
  </Router>
);
