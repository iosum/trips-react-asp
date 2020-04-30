import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './stores/store'
import registerServiceWorker from './registerServiceWorker';
// pass the auth0 context to be able to use the methods
import { Auth0Provider } from './auth0-wrapper';
// import the config file from auth0
import config from './auth_config.json'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

// we need to pass te store to the render method
const store = configureStore({});

// route the user after the user is logged in
const onRedirectCallback = appState => {
  window.history.replaceState(
    // we don't need any data
    {},
    document.title,
    // check if there is any targetUrl, if yes, set a targetUrl 
    appState && appState.targetUrl ? appState.targetUrl
      : window.location.pathname
  );
};


ReactDOM.render(
  // wrap the auth0
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}>
    
    <Provider store={store}>
      <BrowserRouter basename={baseUrl}>
        <App />
      </BrowserRouter>
    </Provider>
    
    </Auth0Provider>,
  rootElement);

registerServiceWorker();

