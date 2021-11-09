import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Nav } from "./components/navbar/Nav";
import { Form } from "./components/pages/Form";
import { Index } from "./components/pages/Index";

export const App = () => {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};
