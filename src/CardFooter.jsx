import { sumNumbers } from "./CardBody";

function CardFooter() {
  const sum = sumNumbers([5, 6, 24, 5, 11]);

  return <small>{sum}</small>;
}

export default CardFooter;
