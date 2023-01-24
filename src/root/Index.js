import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/propertes" element={<h1>propertes</h1>} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
