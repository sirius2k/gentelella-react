import React from 'react';
import ReactDOM from 'react-dom';
// TODO : Integrate redux
//import { createStore } from 'redux';
//import { Provider } from 'react-redux';
import Container from './Container';
import registerServiceWorker from './registerServiceWorker';

// TODO : Integrate redux
//const store = createStore()

const bodyClassName = document.body.className;

console.log("bodyClassName : " + bodyClassName);

ReactDOM.render(
    <Container bodyClassName = {bodyClassName}/>,
    document.getElementById('root')
);

registerServiceWorker();