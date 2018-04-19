import React from "react";

const Hero = ({ hero }) => (
  <div>
    His name is {hero.name} and he is <strong>{hero.height}</strong> height!
  </div>
);

export default Hero;
