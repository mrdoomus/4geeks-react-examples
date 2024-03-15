import { useRef } from "react";

export const UncontrolledCheckbox = () => {
  const checkboxRef = useRef(null);

  const handleSubmit = () => {
    console.log(checkboxRef.current.checked);
  };

  return (
    <div>
      <input type="checkbox" ref={checkboxRef} />
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
