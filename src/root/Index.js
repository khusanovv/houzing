import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { navbar } from "../utils/Navbar";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        {navbar.map(({ path, element, id }) => {
          return <Route key={id} path={path} element={element} />;
        })}
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
