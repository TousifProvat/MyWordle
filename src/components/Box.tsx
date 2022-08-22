import { FunctionComponent, useEffect, useState } from 'react';
import Line from './Line';

interface PropTypes {
  solution: string;
}

const Box: FunctionComponent<PropTypes> = ({ solution }) => {
  const [guesses, setGuesses] = useState<(string | null)[]>(
    Array(6).fill(null)
  );
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [count, setCount] = useState(guesses.length);

  useEffect(() => {
    const handleEvent = (e: KeyboardEvent) => {
      if (gameOver) {
        return;
      }
      if (e.key === 'Enter') {
        if (currentGuess.length !== 5) return;

        let newGuesses = [...guesses];
        newGuesses[guesses.findIndex((val) => val === null)] = currentGuess;
        setGuesses(newGuesses);
        setCurrentGuess('');
        setCount((prev) => prev - 1);

        const isGameOver = currentGuess === solution;

        if (isGameOver) {
          setGameOver(isGameOver);
        }
      }
      if (e.key === 'Backspace') {
        setCurrentGuess((prev) => prev.slice(0, -1));
        return;
      }

      if (e.key === ' ') return;
      if (currentGuess.length >= 5) return;
      setCurrentGuess((prev) => prev + e.key);
    };
    document.addEventListener('keydown', handleEvent);
    return () => document.removeEventListener('keydown', handleEvent);
  }, [currentGuess, gameOver]);
  return (
    <>
      <div
        className={`absolute top-6 bg-white rounded-sm p-2 ${
          count < 4 && 'bg-yellow-300'
        } ${count < 2 && 'bg-red-500'}`}
      >
        Guesses Left:
        <span className="font-bold"> {count}</span>
      </div>
      <div className="flex flex-col space-y-2">
        {guesses.map((guess, i) => {
          const isCurrentGuess = i === guesses.findIndex((val) => val === null);
          return (
            <Line
              guess={isCurrentGuess ? currentGuess : guess ?? ''}
              solution={solution}
              isFinish={!isCurrentGuess && guess != null}
            />
          );
        })}
      </div>
    </>
  );
};

export default Box;
