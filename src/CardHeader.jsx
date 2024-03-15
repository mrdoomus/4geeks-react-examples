import { sumNumbers } from "./CardBody";

function CardHeader() {
  const sum = sumNumbers([5, 6, 10, 2]);

  return <h1>{sum}</h1>;
}

export default CardHeader;
