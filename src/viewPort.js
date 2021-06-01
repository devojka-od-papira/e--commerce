import React, { useState, useEffect } from "react";
//importovati stil

const MyComponent = () => {
  const { width } = useViewPort();
  const breakpoint = 620;

  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default MyComponent;
