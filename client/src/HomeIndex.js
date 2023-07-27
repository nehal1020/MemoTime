import React from 'react';
import { Provider } from 'react-redux';


import { legacy_createStore as createStore} from 'redux';
import {applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';


import Home from './Home';
const store= createStore(reducers, compose(applyMiddleware(thunk)));
const HomeIndex = () => {
  return(
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default HomeIndex;
