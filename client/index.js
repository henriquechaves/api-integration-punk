/**
 * Client entry point
 */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import configureStore from './store';

// Initialize store
const store = configureStore(window.__INITIAL_STATE__);
const mountApp = document.getElementById('root');

const renderApp = (App) => {
  render(
    <AppContainer>
      <App store={store} />
    </AppContainer>,
    mountApp
  );
}

renderApp(App);

// For hot reloading of react components
if (module.hot) {
  module.hot.accept('./App', () => renderApp(App));
}
