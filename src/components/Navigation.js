import React from "react";
import HeroLink from "./HeroLink";
import { Link } from "react-router-dom";

const Navigation = ({ heroes }) => (
  <div className={"navigation"}>
    <Link to={"/"}>Home</Link>
    {heroes.map(hero => <HeroLink key={hero.name} name={hero.name} />)}
  </div>
);

export default Navigation;
