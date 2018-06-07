import React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import './App.css';

const add = () =>
    ({ type: 'ADD' });

const App = ({ dispatch }) =>
    <div className="app">
        <h1 className="app__title">React<br/>Redux<br/>RxJS</h1>
        <button className="add-panel" onClick={ () => dispatch(add()) }>Add</button>
    </div>

export default hot(module)(connect()(App));
