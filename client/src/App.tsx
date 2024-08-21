import { useState } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";
import GuessTheWord from "./components/GuessTheWord";
import { useNavigate } from "react-router-dom";

const App = () => {
  /* const name = "Ian";
  const test = (name: String = "tite", age: Number = 12) => {
    return console.log(name, age);
  };

  test("ian", 24); */
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Button className="bg-red-500" onClick={() => console.log("test")}>
        <p>Hello</p>
      </Button>
      <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <div className="border p-10 rounded-md bg-white">
          <p>Modal</p>
          <Button onClick={() => navigate("/")}>Route Me</Button>
        </div>
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
