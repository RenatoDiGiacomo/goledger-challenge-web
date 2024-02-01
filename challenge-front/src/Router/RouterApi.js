import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import Home from '../Pages/Home';
import Artist from '../Pages/Home/Artist';
import App from '../Pages/App';


const RouterApi = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<Home />} />
        <Route path='artist/:id' element={<Artist />} />
      </Route>
    </Routes>
  );
};

export default RouterApi;

