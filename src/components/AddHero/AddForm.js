import React from "react";
import PropTypes from "prop-types";

const HeroAddForm = ({ addHero }) => {
  let name, height;

  return (
    <div className={"add-hero-form"} style={{border: '1px dashed black'}}>
      <h2>Create new hero!</h2>
      <div>
      <label htmlFor="hero-name" style={{padding: '20px'}}>Name</label>
      <input style={{padding: '20px'}} ref={node => (name = node)} id={"hero-name"} type="text" />
      </div>

      <div>
      <label style={{padding: '20px'}} htmlFor="hero-height">Height</label>
      <input style={{padding: '20px'}} ref={node => (height = node)} id={"hero-height"} type="text" />
      </div>
      <div style={{padding: '20px'}}>
        <button style={{padding: '10px'}} onClick={() => addHero({ name: name.value, height: height.value })}>
          Add Hero!
        </button>
      </div>
    </div>
  );
};

HeroAddForm.propTypes = {
  addHero: PropTypes.func.isRequired
};

export default HeroAddForm;
