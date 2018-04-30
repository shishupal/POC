import 'core-js/fn/object/assign';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/Main';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import rootReducer from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


// Render the main component into the dom
ReactDOM.render(<Provider store={createStoreWithMiddleware(rootReducer)}><App />
</Provider>, document.getElementById('app'));
