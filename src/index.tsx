import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './Styles/globalStyles';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <GlobalStyle />
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
