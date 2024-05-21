import React from "react";
import { Outlet } from "react-router-dom";
import { NavHeader } from "../components/common";

const NavLayout = () => {
  return (
    <div>
      <NavHeader />
      <Outlet />
    </div>
  );
};

export default NavLayout;
