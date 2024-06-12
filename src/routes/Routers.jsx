import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  CommunityPage,
  LoginPage,
  MapPage,
  NotFoundPage,
  PlacePage,
  PostDetailPage,
  SignupPage,
  UserPage,
} from "../pages";
import { LogoLayout, NavLayout } from "../Layout";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<NavLayout />}>
          <Route index element={<MapPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="post/:id" element={<PostDetailPage />} />
          <Route path="place/:id" element={<PlacePage />} />
          <Route path="user" element={<UserPage />} />
        </Route>
        <Route element={<LogoLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
