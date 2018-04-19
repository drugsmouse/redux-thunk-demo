import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

import logo from "../logo.svg";
import "../App.css";
import Navigation from "./Navigation";
import NotFound from "./NotFound";
import Home from "./Home";
import Hero from "./Hero";
import AddHero from "./AddHero";

const getHeroByName = (heroes, name) => heroes.find(hero => hero.name === name);

const App = ({ heroes, loading }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <Navigation heroes={heroes} />
    <AddHero />

    <Switch>
      <Route path={"/"} exact={true} component={Home} />
      <AddHero />
      {heroes.length && (
        <Route
          path={"/hero/:name"}
          render={({ match }) => {
            return <Hero hero={getHeroByName(heroes, match.params.name)} />;
          }}
        />
      )}
      <Route component={NotFound} />
    </Switch>
  </div>
);

App.propTypes = {
  heroes: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default App;
