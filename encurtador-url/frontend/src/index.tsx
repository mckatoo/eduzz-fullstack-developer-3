import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Analytics from './components/Analytics';
import ShortenerProvider from './providers/shortner';

ReactDOM.render(
  <React.StrictMode>
    <ShortenerProvider>
      <App />
    </ShortenerProvider>
    <Analytics />
  </React.StrictMode>,
  document.getElementById('root')
);
