import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import './assets/styles/orbit.css';
import App from './App';
import reportWebVitals from './scripts/reportWebVitals';
import * as serviceWorker from './scripts/serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router>
		  <App />
	</Router>
);

serviceWorker.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
