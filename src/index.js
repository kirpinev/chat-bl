import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { store } from "./redux/store";
import { Chat, Login } from "./pages";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/chat">
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
