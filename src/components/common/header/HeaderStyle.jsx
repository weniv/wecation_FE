import styled from "styled-components";

const StyledHeader = styled.header`
  border-bottom: 1px solid var(--ColorGrayLv2);

  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2.8rem;

    img {
      max-height: 3.2rem;
    }
  }
`;

export { StyledHeader };
