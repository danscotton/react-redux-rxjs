import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';

const log = store => next => action => {
    console.log(action);
    return next(action);
}

const store = createStore(
    () => {},
    applyMiddleware(log),
);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.querySelector('#root')
);
