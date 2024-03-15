export const ControlledCheckbox = ({ checked, onChange }) => {
  //NO LOGIC!
  return <input type="checkbox" checked={checked} onChange={onChange} />;
};

// We specify what's going to happen when resolved (.then)
// and what's going to happen when rejected (.catch)
askQuestion
  .then((param) => {
    console.log(param);
  })
  .catch((error) => {
    console.log(error);
  });

// We specify what's going to happen when resolved (.then first argument)
// and what's going to happen when rejected (.then second argument)
askQuestion.then(
  (param) => {
    console.log(param);
  },
  (error) => {
    console.log(error);
  }
);
