import React, { useEffect, useState } from "react";
import { Map as KakaoMap, MapMarker } from "react-kakao-maps-sdk";
import useCurrentPosition from "../../hooks/useCurrentPosition";
import usePlaceFilter from "../../hooks/usePlaceFilter";

function getMarkerImage(type) {
  switch (type) {
    case "코워킹스페이스":
      return "Green";
    case "카페":
      return "Yellow";
    case "음식점":
      return "Red";
    case "숙박":
      return "Purple";
    default:
      return "Blue";
  }
}
const Map = (props) => {
  const currentPosition = useCurrentPosition();
  const { filteredPlaceData } = props;

  return (
    <KakaoMap
      center={{ lat: 33.37, lng: 126.54 }}
      style={{ width: "100%", height: "600px" }}
      level={10}
    >
      {filteredPlaceData.map((place, index) => (
        <MapMarker
          key={`${place.name}-${place.latlng}`}
          position={place.latlng} // 마커를 표시할 위치
          image={{
            src: `${process.env.PUBLIC_URL}/img/marker/marker${getMarkerImage(
              place.type
            )}.png`,
            size: {
              width: 24,
              height: 35,
            },
          }}
          title={place.name}
        />
      ))}
    </KakaoMap>
  );
};

export default Map;
