import React from 'react';
import { hydrate } from 'react-dom';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import Index from './portfolio/index';
import reducer from './reducers/data';
import data from './portfolio/data.eng.json';

const initialState = {
    data: {
        ...data
    },
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

hydrate(
    <Provider store={store}>
        <Index />
    </Provider>,
    document.getElementById('app')
);