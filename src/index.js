import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import 'raf/polyfill';
import 'bootswatch/sandstone/bootstrap.css';
import React from 'react';
import { render, hydrate } from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Provider store={store}><App /></Provider>, rootElement);
} else {
  render(<Provider store={store}><App /></Provider>, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
