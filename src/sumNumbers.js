function sumNumbers(numberAray) {
  return numberAray.reduce((acc, curr) => (acc += curr), 0);
}

export default sumNumbers;
