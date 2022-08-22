import React, { FunctionComponent } from 'react';

interface PropTypes {
  guess: string;
  solution: string;
  isFinish: boolean;
}

const Line: FunctionComponent<PropTypes> = ({ guess, solution, isFinish }) => {
  let tiles = [];

  for (let i = 0; i < 5; i++) {
    const char = guess[i];

    let resutlClass = '';

    if (isFinish) {
      if (char === solution[i]) {
        resutlClass += ' bg-green-400';
      } else if (solution.includes(char)) {
        resutlClass += ' bg-yellow-400';
      } else {
        resutlClass += ' bg-slate-300';
      }
    }

    tiles.push(
      <div
        className={`${resutlClass} flex justify-center items-center w-[80px] h-[80px] border-2 border-solid border-black shadow-md text-3xl font-bold uppercase`}
      >
        {char}
      </div>
    );
  }

  return <div className="flex space-x-2">{tiles}</div>;
};

export default Line;
