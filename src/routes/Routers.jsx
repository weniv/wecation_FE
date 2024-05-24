import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  CommunityPage,
  LoginPage,
  MapPage,
  NotFoundPage,
  PlacePage,
  SignupPage,
  UserPage,
} from "../pages";
import { LogoLayout, NavLayout } from "../Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/wecation_FE">
          <Route element={<NavLayout />}>
            <Route path="/" element={<MapPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/place/:id" element={<PlacePage />} />
            <Route path="/user" element={<UserPage />} />
          </Route>
          <Route element={<LogoLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
