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
  const generateWord = (): string[] => {
    return words[Math.floor(Math.random() * words.length)]
      .toUpperCase()
      .split("");
  };
  const [wordToGuess, setWordToGuess] = useState(generateWord());
  const [tries, setTries] = useState(() => wordToGuess.length - 1);
  const [hint, setHint] = useState<string[]>(() =>
    Array.from({ length: wordToGuess.length })
  );
  const [won, setWon] = useState<boolean>(false);

  const [userGuess, setUserGuess] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setUserGuess("");
    if (userGuess.trim().toUpperCase() !== wordToGuess.join("")) {
      giveHint();
      setTries((t) => t - 1);
      return;
    }

    setWon(true);
  };

  const giveHint = (): void => {
    let index: number = 0;

    do {
      index = Math.floor(Math.random() * wordToGuess.length);
    } while (hint[index]);

    setHint((prevHint: string[]): string[] => {
      const newHint = [...prevHint];
      newHint[index] = wordToGuess[index];
      return newHint;
    });
  };

  const reset = (): void => {
    setWordToGuess(generateWord());
    setUserGuess("");
    setTries(() => wordToGuess.length - 1);
    setHint(Array.from({ length: wordToGuess.length }));
    setWon(false);
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
        <div className="flex gap-2 w-full justify-between">
          {won
            ? wordToGuess.map((letter, index) => (
                <span
                  key={index}
                  className="border-b border-black w-4 text-center text-green-500 font-bold"
                >
                  {letter}
                </span>
              ))
            : hint.map((letter, index) => (
                <span
                  key={index}
                  className="border-b border-black w-4 text-center text-red-500 font-bold"
                >
                  {letter}
                </span>
              ))}
        </div>
        {won ? (
          <>
            <p className="text-center my-2">You won</p>
            <Button onClick={reset}>Play Again</Button>
          </>
        ) : tries ? (
          <>
            <p className="mt-4">You only have {tries} tries</p>
            <input
              type="text"
              value={userGuess.toUpperCase()}
              className="border-b border-black outline-none mt-2"
              onChange={(e) => setUserGuess(e.target.value)}
            />
          </>
        ) : (
          <>
            <p className="text-center my-2">You lose</p>
            <Button onClick={reset}>Retry</Button>
          </>
        )}
      </form>
    </div>
  );
};

export default App;
