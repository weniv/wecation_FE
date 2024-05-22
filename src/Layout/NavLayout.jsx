import React from "react";
import { Outlet } from "react-router-dom";
import { NavHeader } from "../components/common";
import styled from "styled-components";

const NavLayout = () => {
  return (
    <StyledLayout>
      <NavHeader />
      <Outlet />
    </StyledLayout>
  );
};

export default NavLayout;

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
`;
