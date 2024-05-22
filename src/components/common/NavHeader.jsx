import React from "react";
import styled from "styled-components";
import { WIDTH } from "../../utils/constants";
import { Link } from "react-router-dom";
import { StyledHeader } from "./HeaderStyle";

const NavHeader = () => {
  return (
    <StyledHeader>
      <HeaderCont>
        <h1>WE!CATION</h1>
        <StyledNav>
          <ul>
            <li>
              <Link to="/">지도</Link>
            </li>
            <li>
              <Link to="/community">커뮤니티</Link>
            </li>
          </ul>
        </StyledNav>
      </HeaderCont>
    </StyledHeader>
  );
};

export default NavHeader;

const HeaderCont = styled.div`
  display: flex;
  width: Calc(100% - ${WIDTH.marginWidth} * 2);
  max-width: ${WIDTH.maxWidth};
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;
`;

const StyledNav = styled.nav`
  margin-right: auto;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
  }
`;
