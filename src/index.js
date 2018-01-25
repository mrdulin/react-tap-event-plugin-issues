import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin({
  shouldRejectClick: function () {
    return true;
  }
});

import App from "./containers/app";
import Home from "./containers/home";
import About from "./containers/about";
import Topics from './containers/topics';

const render = Root => {
  ReactDOM.render(
    <HashRouter>
      <Root>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path='/topics' component={Topics} />
        </Switch>
      </Root>
    </HashRouter>,
    document.getElementById("app")
  );
};

render(App);
