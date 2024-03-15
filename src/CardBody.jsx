function sumNumbers(numberAray) {
  return numberAray.reduce((acc, curr) => (acc += curr), 0);
}

export { sumNumbers };

function CardBody() {
  const sum = sumNumbers([5, 6]);
  return <p>{sum}</p>;
}

export default CardBody;
