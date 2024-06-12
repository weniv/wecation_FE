import React from "react";
import { TemplateStyle } from "./TemplateStyle";
import { Map, PlaceList, PlaceOption } from "../common";
import usePlaceFilter from "../../hooks/usePlaceFilter";
import styled from "styled-components";

const MapTemplate = () => {
  const { selectedOption, filteredPlaceData, handleOptionChange } =
    usePlaceFilter();

  return (
    <TemplateStyle>
      <Map filteredPlaceData={filteredPlaceData} />
      <StyledPlace>
        <PlaceOption
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
        />
        <PlaceList filteredPlaceData={filteredPlaceData} />
      </StyledPlace>
    </TemplateStyle>
  );
};

export default MapTemplate;

const StyledPlace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-bottom: auto;
`;
