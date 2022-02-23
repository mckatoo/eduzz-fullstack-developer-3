import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
