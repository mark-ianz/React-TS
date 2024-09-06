import { useState } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";
import GuessTheWord from "./components/GuessTheWord";
import Test from "./components/Test";

type Set = {
  reps: number;
  weight: number;
  id: string;
};

type Exercise = {
  _id: string;
  name: string;
  description: string;
  sets: Set[];
};

type UserProps = {
  username: string;
  exercises: Exercise[];
  age: number;
  isAdmin: boolean;
};

const App = () => {
  /* const name = "XD";
  const test = (name: String = "john", age: Number = 12) => {
    return console.log(name, age);
  };

  test("doe", 24); */

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [counter, setCounter] = useState(0);

  const [users, setUsers] = useState<UserProps[]>([]);

  setUsers((u) => {
    return [
      ...u,
      {
        username: "hi,",
        exercises: [
          {
            _id: "123",
            name: "Push up",
            description: "Push day to ahwhwahaw",
            sets: [
              {
                reps: 12,
                weight: 100,
                id: "2",
              },
            ],
          },
          {
            _id: "123",
            name: "Lateral Raise",
            description: "Push day to ahwhwahaw",
            sets: [
              {
                reps: 20,
                weight: 20,
                id: "3",
              },
            ],
          },
        ],
        age: 12,
        isAdmin: false,
      },
    ];
  });
  return (
    <div>
      {users.map((user) => (
        <p>{user.exercises.map((exercise) => exercise.name)}</p>
      ))}
      <Button className="bg-red-500" onClick={() => console.log("test")}>
        <p>Hello</p>
      </Button>
      <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <Test />
      </Modal>
      <p>Counter: {counter}</p>
      <Button onClick={() => setCounter((c) => c - 1)}>Minus Count</Button>
      <Button onClick={() => setCounter((c) => c + 1)}>Plus Count</Button>
      <GuessTheWord />
      <p>Hi test</p>
    </div>
  );
};

export default App;
