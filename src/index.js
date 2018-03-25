import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// TODO : Integrate redux
//import { createStore } from 'redux';
//import { Provider } from 'react-redux';
import Container from './Container';
import registerServiceWorker from './registerServiceWorker';

// TODO : Integrate redux
//const store = createStore()

ReactDOM.render(
    <Container/>,
    document.getElementById('root')
);

registerServiceWorker();