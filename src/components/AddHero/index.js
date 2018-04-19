import React from "react";
import { connect } from "react-redux";
import { addHero } from "../../actions/heroes";

import AddHeroForm from "./AddForm";

class AddHero extends React.Component {


  addHeroHandler = hero => {
    this.props.addHero(hero);
  };

  render() {
    return <AddHeroForm addHero={this.addHeroHandler.bind(this)} />;
  }
}

export default connect(null, dispatch => ({
  addHero: hero => dispatch(addHero(hero))
}))(AddHero);
