import {createStore, combineReducers} from 'redux';
import { localeReducer } from 'react-localize-redux';

import Email_Reducer from '../reducers/Email_Reducer';

export default () => {
  const store = createStore(
    combineReducers({      
      locale: localeReducer,
      email: Email_Reducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}