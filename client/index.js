require("babel-polyfill")
import "../public/style.css"
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'
import history from "./history";
import { Router } from "react-router-dom";
import App from './App'

ReactDOM.render(
  <Provider store = {store}>
    <Router history= {history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root') // make sure this is the same as the id of the div in your index.html
);
