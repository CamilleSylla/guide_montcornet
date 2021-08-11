import React, { useState, createContext, useEffect } from "react";

export const NavigationContext = createContext();

export function NavigationProvider(props) {
    const [navigation, setNavigation] = useState(null)
  return (
    <NavigationContext.Provider value={[navigation, setNavigation]}>
      {props.children}
    </NavigationContext.Provider>
  );
}