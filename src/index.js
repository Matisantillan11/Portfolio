import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import './assets/index.css'
import firebase from 'firebase/app'
import config from './firebase/config/Config.jsx'
firebase.initializeApp(config)

ReactDOM.render(
	<React.StrictMode>{<App />}</React.StrictMode>,
	document.getElementById('root'),
)
