import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  CommunityPage,
  LoginPage,
  MapPage,
  PlacePage,
  SignupPage,
  UserPage,
} from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/place/:id" element={<PlacePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
