import React, { createContext, useState, useMemo } from "react";

export const CountContext = createContext({});

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(10);

  const contextValue = useMemo(
    () => ({
      count,
      incrementCount: () => {
        setCount((prev) => ++prev);
      },
    }),
    [count]
  );

  return (
    <CountContext.Provider value={contextValue}>
      {children}
    </CountContext.Provider>
  );
};
