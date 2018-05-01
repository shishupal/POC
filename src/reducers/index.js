import { combineReducers } from 'redux';
import reducerCards from './reducer_getCards';
import postInfo from './reducer_postInfo';
const rootReducer = combineReducers({
  cards:reducerCards,
  Info:postInfo
});

export default rootReducer;
