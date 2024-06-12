import React from "react";
import styled from "styled-components";

const ColorIcon = (props) => {
  const { src, name, color, size } = props;

  return (
    <StyledColorIcon size={size} color={color} src={src}>
      <span className="sr-only">{name}</span>
    </StyledColorIcon>
  );
};

export default ColorIcon;

const StyledColorIcon = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};

  &::before {
    content: "";
    display: block;
    mask-image: url(${(props) => props.src});
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    background: ${(props) => props.color};
    mask-size: cover;
  }
`;
