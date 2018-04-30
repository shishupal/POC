import { combineReducers } from 'redux';
import reducerCards from './reducer_getCards';

const rootReducer = combineReducers({
  cards:reducerCards
});

export default rootReducer;
