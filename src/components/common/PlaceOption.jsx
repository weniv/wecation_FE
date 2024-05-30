import React, { useState } from "react";
import styled from "styled-components";
import { PlaceData } from "../../data/PlaceData";
import usePlaceFilter from "../../hooks/usePlaceFilter";

const PlaceOption = (props) => {
  const { selectedOption, handleOptionChange } = props;

  return (
    <StyledSelect>
      <StyledOption bgColor={"var(--ColorCodeGreen)"}>
        <input
          type="checkbox"
          name="place-type"
          id="coworking"
          checked={selectedOption.coworking}
          onChange={() => handleOptionChange("coworking")}
        />
        <label htmlFor="coworking">코워킹스페이스</label>
      </StyledOption>
      <StyledOption bgColor={"var(--ColorCodePurple)"}>
        <input
          type="checkbox"
          name="place-type"
          id="accommodation"
          checked={selectedOption.accommodation}
          onChange={() => handleOptionChange("accommodation")}
        />
        <label htmlFor="accommodation">숙박</label>
      </StyledOption>
      <StyledOption bgColor={"var(--ColorCodeOrange)"}>
        <input
          type="checkbox"
          name="place-type"
          id="restaurant"
          checked={selectedOption.restaurant}
          onChange={() => handleOptionChange("restaurant")}
        />
        <label htmlFor="restaurant">음식점</label>
      </StyledOption>
      <StyledOption bgColor={"var(--ColorCodePink)"}>
        <input
          type="checkbox"
          name="place-type"
          id="cafe"
          checked={selectedOption.cafe}
          onChange={() => handleOptionChange("cafe")}
        />
        <label htmlFor="cafe">카페</label>
      </StyledOption>
      <StyledOption bgColor={"var(--ColorCodeBlue)"}>
        <input
          type="checkbox"
          name="place-type"
          id="institution"
          checked={selectedOption.institution}
          onChange={() => handleOptionChange("institution")}
        />
        <label htmlFor="institution">기관</label>
      </StyledOption>
    </StyledSelect>
  );
};

export default PlaceOption;

const StyledSelect = styled.div`
  display: flex;
  margin: 1rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const StyledOption = styled.div`
  label {
    background-color: var(--ColorGrayLv1);
    border-radius: 1rem;
    padding: 1rem;
    white-space: nowrap;
    box-shadow: var(--EffectShadow);
  }
  input {
    display: none;
  }
  input:checked + label {
    background-color: ${(props) => props.bgColor};
    color: var(--ColorBackground);
  }
`;
