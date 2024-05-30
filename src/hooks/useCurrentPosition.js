import { useState, useEffect } from "react";

const useCurrentPosition = () => {
  const [currentPosition, setCurrentPosition] = useState({
    lat: 33.450701,
    lng: 126.570667,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords } = position;
      setCurrentPosition({
        lat: coords.latitude,
        lng: coords.longitude,
      });
    });
  }, []);

  return currentPosition;
};

export default useCurrentPosition;
