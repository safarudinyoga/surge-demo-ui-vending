import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';

import counter from './counter';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  counter,
});


export default rootReducer;
