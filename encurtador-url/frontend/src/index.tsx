import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Adsense from './components/Adsense';
import Analytics from './components/Analytics';
import ShortenerProvider from './providers/shortner';

ReactDOM.render(
  <React.StrictMode>
    <ShortenerProvider>
      <App />
    </ShortenerProvider>
    <Analytics />
    <Adsense />
  </React.StrictMode>,
  document.getElementById('root')
);
