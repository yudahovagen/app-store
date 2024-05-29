import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../components/home";
import { Favorites } from "../../components/favorites";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};

export default Router;
