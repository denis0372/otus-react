import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NoMatch, Header, SignIn, ConditionsScreen } from "@/screens";
import { Provider } from "react-redux";
import { store } from "@/rdx/store";
import { actions as conditionsActions } from "@/modules/Conditions/slice";
import "@/styles.css";

export const App: React.FC<{}> = () => (
  <Provider store={store}>
    <Router>
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/conditions" onClick={() => store.dispatch(conditionsActions.conditionEditorInit())}>Conditions Editor</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/conditions" component={ConditionsScreen} />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
    </Router>
  </Provider>
);
