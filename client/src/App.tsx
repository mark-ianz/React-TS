import { useState } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";
import GuessTheWord from "./components/GuessTheWord";
import Test from "./components/Test";

const App = () => {
  /* const name = "XD";
  const test = (name: String = "john", age: Number = 12) => {
    return console.log(name, age);
  };

  test("doe", 24); */

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [counter, setCounter] = useState(0);

  return (
    <div>
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
