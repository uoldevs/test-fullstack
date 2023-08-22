import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Register from '../pages/register';

function AppRoutes() {
  return (
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/register/:id"
          element={<Register />}
        />
      </Routes>
  );
}

export default AppRoutes;
