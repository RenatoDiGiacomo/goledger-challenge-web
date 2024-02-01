import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Pages/App';
import { GlobalStyle } from './GlobalStyle';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Home from './Pages/Home';
import RouterApi from './Router/RouterApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <Router>
      <RouterApi />
    </Router>
  </React.StrictMode>
);