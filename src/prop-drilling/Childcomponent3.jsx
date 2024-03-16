const globalState = "Camilo";

const ChildComponent3 = () => {
  // fetch from global state
  const name = globalState;
  return <h1>{name}</h1>;
};

export default ChildComponent3;
