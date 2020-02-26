const initialState = {
  isLoading: false,
  data: [],
  error: false
};

const catchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POKEMONS_SUCCESS":
      return Object.assign({}, state, {
        data: action.data,
        isLoading: false,
        error: false
      });
      break;
    case "FETCH_POKEMONS_REQUEST":
      return Object.assign({}, state, {
        isLoading: true,
        data: [],
        error: false
      });
      break;
    case "FETCH_POKEMONS_FAILURE":
      return Object.assign({}, state, {
        error: action.message,
        isLoading: false
      });
      break;




    case "CATCH_POKEMON_SUCCESS":
      return Object.assign({}, state, {
        data: state.data.map(item => {
          if (item.id === action.data.id) {
            return action.data;
          } else {
            return item;
          }
        }),
      });




    default:
      return state;
      break;
  }
};

export default catchReducer;
