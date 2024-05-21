import React from "react";
import styled from "styled-components";
import { WIDTH } from "../../utils/constants";
import { Link } from "react-router-dom";
import { StyledHeader } from "./HeaderStyle";

const LogoHeader = () => {
  return (
    <StyledHeader>
      <HeaderCont>
        <h1>
          <Link to="/">WE!CATION</Link>
        </h1>
      </HeaderCont>
    </StyledHeader>
  );
};

export default LogoHeader;

const HeaderCont = styled.div`
  display: flex;
  width: 100%;
  margin: ${WIDTH.marginWidth};
  max-width: ${WIDTH.maxWidth};
  align-items: center;
  justify-content: center;
`;
