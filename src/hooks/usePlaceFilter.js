import { useState, useEffect } from "react";
import { PlaceData } from "../data/PlaceData";

const usePlaceFilter = () => {
  const [selectedOption, setSelectedOption] = useState({
    coworking: true,
    accommodation: true,
    restaurant: true,
    cafe: true,
    institution: true,
  });

  const [filteredPlaceData, setFilteredPlaceData] = useState(PlaceData);

  useEffect(() => {
    const filteredData = PlaceData.filter((place) => {
      switch (place.type) {
        case "코워킹스페이스":
          return selectedOption.coworking;
        case "숙박":
          return selectedOption.accommodation;
        case "음식점":
          return selectedOption.restaurant;
        case "카페":
          return selectedOption.cafe;
        case "기관":
          return selectedOption.institution;
        default:
          return true;
      }
    });

    setFilteredPlaceData(filteredData);
  }, [PlaceData, selectedOption]);

  const handleOptionChange = (optionId) => {
    setSelectedOption((prevOption) => ({
      ...prevOption,
      [optionId]: !prevOption[optionId],
    }));
  };

  return {
    selectedOption,
    filteredPlaceData,
    handleOptionChange,
  };
};

export default usePlaceFilter;
