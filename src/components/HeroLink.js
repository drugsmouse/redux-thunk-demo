import React from "react";
import { Link } from "react-router-dom";
const HeroLink = ({ name }) => (
  <h2>
    <Link to={`/hero/${name}`}>{name}</Link>
  </h2>
);

export default HeroLink;
