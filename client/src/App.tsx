import { FormEvent, useState } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";
import words from "./words";

const App = () => {
  /* const name = "Ian";
  const test = (name: String = "tite", age: Number = 12) => {
    return console.log(name, age);
  };

  test("ian", 24); */

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [counter, setCounter] = useState(0);

  // Guess the word
  const generateWord = (): string => {
    return words[Math.floor(Math.random() * words.length)];
  };
  const [wordToGuess, setWordToGuess] = useState(generateWord());
  const [tries, setTries] = useState(() => wordToGuess.length - 1);

  const [userGuess, setUserGuess] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setUserGuess("");
    if (userGuess.trim() === wordToGuess) {
      console.log("won");
    } else {
      setTries((t) => t - 1);
    }
  };

  const reset = (): void => {
    setWordToGuess(generateWord());
    setUserGuess("");
    setTries(() => wordToGuess.length - 1);
  };

  return (
    <div>
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
      <form
        onSubmit={handleSubmit}
        className="border border-black flex flex-col w-48 ml-2 mt-4 p-2"
      >
        <h1 className="mb-4">Guess the word</h1>
        <div className="flex gap-2">
          {wordToGuess.split("").map((_, index) => (
            <span key={index} className="border-b border-black w-4"></span>
          ))}
        </div>
        {tries ? (
          <>
            <p className="mt-4">You only have {tries} tries</p>

            <input
              type="text"
              value={userGuess}
              className="border-b border-black outline-none mt-2"
              onChange={(e) => setUserGuess(e.target.value)}
            />
          </>
        ) : (
          <>
            <p>You lose</p>
            <Button onClick={reset}>Retry</Button>
          </>
        )}
      </form>
    </div>
  );
};

export default App;
