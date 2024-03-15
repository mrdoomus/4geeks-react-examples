import React, { useState } from "react";
import { ControlledCheckbox } from "./ControlledCheckbox";
import { UncontrolledCheckbox } from "./UncontrolledComponent";
import { useEffect } from "react";
import fetchTodoList from "./services";

const ParentComponent = () => {
  // HAS LOGIC!
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <ControlledCheckbox checked={isChecked} onChange={handleCheckboxChange} />
      <UncontrolledCheckbox />
    </div>
  );
};

export default ParentComponent;
