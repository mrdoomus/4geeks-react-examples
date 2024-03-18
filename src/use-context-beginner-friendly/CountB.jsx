import React, { useContext, useState } from "react";
import { CountContext } from "./CountContext";

function CountB() {
  const context = useContext(CountContext);

  return <h1>{context.count}</h1>;
}

export default CountB;
