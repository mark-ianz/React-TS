import { FormEvent, useState } from "react";
import words from "../words";
import Button from "./Button";

const GuessTheWord = () => {
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
  );
};

export default GuessTheWord;
