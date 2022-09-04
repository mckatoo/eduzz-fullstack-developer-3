import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import ShortenerProvider from './providers/shortner';

ReactDOM.render(
  <React.StrictMode>
    <ShortenerProvider>
      <App />
    </ShortenerProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
