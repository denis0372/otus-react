import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NoMatch, Header, SignIn, ConditionsScreen } from "@/screens";
import { Provider } from "react-redux";
import { store } from "@/rdx/store";
import "@/styles.css";

export const App: React.FC<{}> = () => (
  <div id="page">
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/conditions" component={ConditionsScreen} />
          <Route path="/">
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </div>
);
