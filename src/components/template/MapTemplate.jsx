import React from "react";
import { TemplateSylte } from "./TemplateSylte";
import { Map, PlaceOption } from "../common";
import usePlaceFilter from "../../hooks/usePlaceFilter";

const MapTemplate = () => {
  const { selectedOption, filteredPlaceData, handleOptionChange } =
    usePlaceFilter();

  return (
    <TemplateSylte>
      <Map filteredPlaceData={filteredPlaceData} />
      <PlaceOption
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
    </TemplateSylte>
  );
};

export default MapTemplate;
