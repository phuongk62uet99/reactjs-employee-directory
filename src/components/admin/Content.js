import React, { Component } from "react";
import routes from "./routes/Routes";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Content extends Component {
  render() {
    return (
      <section id="main-content">
        <section className="wrapper">
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </section>
        <Footer></Footer>
      </section>
    );
  }
}

export default Content;
