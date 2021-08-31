import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import TagManager from 'react-gtm-module'

// import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker';

/* GTM is only applicable for production env */
if (process.env.NODE_ENV === 'production') {
  /* GTM is only applicable for cloud page */
  if (window.location.hostname === 'cloud.greenhk.greenpeace.org') {
    const tagManagerArgs = {
      gtmId: 'GTM-M6LZL75',
    }
    TagManager.initialize(tagManagerArgs)
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
