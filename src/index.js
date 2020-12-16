import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { store } from "./redux/store";

import { ROUTES } from "./constants";

import { Chat, Login } from "./pages";

import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path={ROUTES.LOGIN}>
          <Login />
        </Route>
        <Route path={ROUTES.CHAT}>
          <Chat />
        </Route>
      </Switch>
    </Router>
  </>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
