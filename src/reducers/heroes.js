import {
  HERO_FETCH_START,
  HERO_FETCH_SUCCESS,
  HERO_FETCH_FAILED,
  ADD_HERO
} from "../actions/heroes";

const initialState = {
  items: [],
  loading: false
};

const heroes = (state = initialState, action) => {
  switch (action.type) {
    case HERO_FETCH_START:
      return {
        ...state,
        loading: true
      };

    case HERO_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload
      };
    case HERO_FETCH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case ADD_HERO:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
};

export default heroes;
