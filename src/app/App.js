import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Nav } from "./components/navbar/Nav";
import { Pets } from "./components/pages/Pets";
import { Users } from "./components/pages/Users";

export const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users" element={<Users />} />
        <Route path="/pets" element={<Pets />} />
      </Routes>
    </BrowserRouter>
  );
};
