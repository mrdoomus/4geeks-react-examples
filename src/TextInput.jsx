export default function TextInput() {
  function handleOnKeyPress(event) {
    if (event.code == "Enter") {
      console.log("Enter was pressed");
    } else {
      console.log(event.key);
    }
  }

  return <input type="text" onKeyPress={handleOnKeyPress} />;
}
