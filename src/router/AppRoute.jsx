import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/main/Main";
import AboutUs from "../pages/about/AboutUs";
import AppLayout from "../layout/AppLayout";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Main />} />
        <Route path="about-us" element={<AboutUs />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
