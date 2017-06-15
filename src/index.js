// import our required modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

// get our rootReducer and rootEpic
import rootReducer from './redux/reducers';
import rootEpic from './redux/epics';

// We'll also need our app component
import App from './App';

// define an initial starting state
const initialState = {};

// create a redux store to be provided to our entire app
const store = createStore(
    rootReducer, 
    initialState, 
    compose(
        applyMiddleware(
            createEpicMiddleware(rootEpic)
        )
    )
);

// render out our root component, providing our store to all components within it
ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));