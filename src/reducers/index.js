import catchReducer from './catch-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  allPokemonsStore: catchReducer
});

export default rootReducer;
