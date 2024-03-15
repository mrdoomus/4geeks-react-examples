import { useParams } from "react-router-dom";

const STUDENTS = [
  { name: "Stan", id: 1 },
  { name: "Cedric", id: 2 },
  { name: "Aya", id: 3 },
];

const STUDENTS_DATA = {
  1: {
    age: 23,
    nationality: "American",
    gender: "M",
    height: "5'10''",
  },
  2: {
    age: 27,
    nationality: "American",
    gender: "M",
    height: "6'1''",
  },
  3: {
    age: 18,
    nationality: "American",
    gender: "F",
    height: "5'8''",
  },
};

const Students = () => {
  const { id, name } = useParams();
  const { age, nationality, height, gender } = STUDENTS_DATA[id];

  return (
    <div>
      {STUDENTS.map((student) => (
        <li>
          <a href={`/student/${student.id}/${student.name}`}>{student.name}</a>
        </li>
      ))}
      <h1>{name}</h1>
      <ul>
        <li>age: {age}</li>
        <li>gender: {gender}</li>
        <li>nationality: {nationality}</li>
        <li>height: {height}</li>
      </ul>
    </div>
  );
};

export default Students;
