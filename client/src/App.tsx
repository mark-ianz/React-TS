import { useState } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";
import words from "./words";

const App = () => {
  const name = "Ian";
  const test = (name: String = "tite", age: Number = 12) => {
    return console.log(name, age);
  };

  test("ian", 24);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [counter, setCounter] = useState(0);

  const [wordToGuess, setWordToGuess] = useState(
    () => words[Math.floor(Math.random() * words.length)]
  );
  return (
    <div>
      {name}
      <Button className="bg-red-500" onClick={() => console.log("test")}>
        <p>Hello</p>
      </Button>
      <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <div className="border p-10 rounded-md bg-white">
          <p>Modal</p>
        </div>
      </Modal>
      <p>Counter: {counter}</p>
      <Button onClick={() => setCounter((c) => c - 1)}>Minus Count</Button>
      <Button onClick={() => setCounter((c) => c + 1)}>Plus Count</Button>
      <div>
        <h1 className="mb-4">Guess the word</h1>
        <div className="flex gap-2">
          {wordToGuess.split ("").map ((_, index)=> (
            <span key={index} className="border-b border-black w-4"></span>
          ))}
        </div>
        <input type="text" className="border-b border-black outline-none mt-2" />
      </div>
    </div>
  );
};

export default App;
