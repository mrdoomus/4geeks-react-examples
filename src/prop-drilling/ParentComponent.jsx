import { useState } from "react";
import ChildComponent1 from "./Childcomponent1";

const ParentComponent = () => {
  const [name, setName] = useState("Camilo");

  return <ChildComponent1 />;
};

export default ParentComponent;
