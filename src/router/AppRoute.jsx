import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/main/Main";
import AboutUs from "../pages/about/AboutUs";

const AppRoute = () => {
  return(
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/about-us' element={<AboutUs/>} /> 
    </Routes>
  )
};

export default AppRoute;
