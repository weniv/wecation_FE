import React from "react";
import styled from "styled-components";
import { TYPE_COLOR } from "../../utils/constants";

const PlaceList = (props) => {
  const { filteredPlaceData } = props;

  return (
    <StyledList>
      {filteredPlaceData.map((place, index) => (
        <StyledItem type={place.type} key={`${place.name}-${place.latlng}`}>
          {place.name}
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default PlaceList;

const StyledList = styled.ul`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const StyledItem = styled.li`
  padding: 1rem;
  border: 1px solid black;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;

  &::before {
    /* content: "${(props) => props.type}"; */
    content: "";
    width: 1rem;
    height: 1rem;
    display: inline-block;
    background-color: ${(props) => TYPE_COLOR[props.type]};
  }

  &:hover {
    background-color: var(--ColorGrayLv1);
  }
`;
