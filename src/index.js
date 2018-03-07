import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { initialize, addTranslation } from 'react-localize-redux';
import languages from './languages';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './sb-admin-2.css';

// Load Quicksand typeface
require('typeface-quicksand')

const store = configureStore();
const json = require('./translations/global.json');

// Initialize with languages
store.dispatch(initialize(languages, { defaultLanguage: 'en' }));

// Add translations
store.dispatch(addTranslation(json));


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx,
  document.getElementById('root')
);
