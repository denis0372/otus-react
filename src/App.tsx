import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Login } from "@/components/Login/LoginComponent";
import { ConditionsScreen } from "@/components/Conditions/ConditionsScreen";
import { NoMatchScreen } from "@/screens/NoMatchScreen";
import { User } from "@/components/User/UserScreen";
import { Provider } from "react-redux";
import { store } from "@/rdx/store";
import "@/styles.css";
import { conditionEdit } from "./rdx/actions";

export const App: React.FC<{}> = () => (
  <Provider store={store}>
    <Router>
        <User />
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/conditions" /*onClick={() => store.dispatch(conditionEdit())}*/>Conditions Editor</Link>
            </li>
            <li>
              <Link to="/user/Denis">Denis</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/conditions" component={ConditionsScreen} />
          <Route path="*">
            <NoMatchScreen />
          </Route>
        </Switch>
    </Router>
  </Provider>
);
