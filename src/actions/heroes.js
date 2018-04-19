export const HERO_FETCH_START = "HERO_FETCH_START";
export const HERO_FETCH_SUCCESS = "HERO_FETCH_SUCCESS";
export const HERO_FETCH_FAILED = "HERO_FETCH_FAILED";

export const ADD_HERO = "ADD_HERO";

const fetchHeroes = () => dispatch => {
  dispatch({ type: HERO_FETCH_START });
  fetch("https://swapi.co/api/people")
    .then(data => data.json())
    .then(heroes => {
      dispatch({ type: HERO_FETCH_SUCCESS, payload: heroes.results });
    })
    .catch(err => {
      dispatch({
        type: HERO_FETCH_FAILED,
        payload: err
      });
    });
};

export const addHero = ({ name, height }) => ({
  type: ADD_HERO,
  payload: {
    name,
    height
  }
});

export default fetchHeroes;
