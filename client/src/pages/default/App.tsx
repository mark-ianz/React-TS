import { useReducer, useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import GuessTheWord from "../../components/GuessTheWord";
import Test from "../../components/Test";

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
  id: string;
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

  const [users, _] = useState<UserProps[]>([
    {
      id: "1",
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
  ]);

  // Count With Reducer

  type Count = { count: number };

  const countInitialState: Count = { count: 0 };

  type CountActionType = {
    type: "increment" | "decrement";
  };

  const countReducer = (state: Count, action: CountActionType) => {
    switch (action.type) {
      case "increment":
        return {
          count: state.count + 1,
        };
      case "decrement":
        return {
          count: state.count - 1,
        };
    }
  };

  const [{ count }, dispatch] = useReducer(countReducer, countInitialState);

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.exercises.map((exercise) => exercise.name)}</p>
      ))}
      <Button className="bg-red-500" onClick={() => console.log("test")}>
        Hello
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
      <h1>Using Reducer on Counter!</h1>
      <Button onClick={() => dispatch({ type: "increment" })}>Plus</Button>
      <p>{count}</p>
      <Button onClick={() => dispatch({ type: "decrement" })}>Minus</Button>
    </div>
  );
};

export default App;
