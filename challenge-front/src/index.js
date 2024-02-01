import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Pages/App';
import { GlobalStyle } from './GlobalStyle';
import Header from './Components/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <App />
  </React.StrictMode>
);