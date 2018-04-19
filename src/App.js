import React, { Component } from "react";
import { connect } from "react-redux";

import fetchHeroes from "./actions/heroes";
import App from "./components/App";

class AppContainer extends Component {
  componentDidMount() {
    this.props.fetchHeroes();
  }

  render() {
    const { heroes, loading } = this.props;
    return <App heroes={heroes} loading={loading} />;
  }
}

const mapStateToProps = state => ({
  heroes: state.heroes.items,
  loading: state.heroes.loading
});

const mapDispatchToProps = dispatch => ({
  fetchHeroes: () => dispatch(fetchHeroes())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
