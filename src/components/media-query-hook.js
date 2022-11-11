import React, { useState, useEffect } from "react";

export const SIZES = {
  BIG_DESKTOP: "BIG_DESKTOP",
  DESKTOP: "DESKTOP",
  MOBILE: "MOBILE",
};

function useMediaQueryHook() {
  const initialWidth = window.innerWidth;
  const [width, setWidth] = useState(initialWidth);
  const [device, setDevice] = useState("");

  useEffect(() => {
    setWidth(innerWidth);

    console.log(width);
    if (width >= 1300) {
      setDevice(SIZES.BIG_DESKTOP);
    }
    if (width > 650 && width < 1300) {
      setDevice(SIZES.DESKTOP);
    }
    if (width <= 650) setDevice(SIZES.MOBILE);
  }, []);

  return { device };
}

export default useMediaQueryHook;
