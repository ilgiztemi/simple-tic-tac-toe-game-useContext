import { createContext, useContext, useState } from "react";

export const GameContext = createContext();
export const GameProvider = ({ children }) => {
  const [buttons, setButtons] = useState(Array(9).fill(null));
  const [flag, setFlag] = useState(true);
  const handleclick = (ind) => {
    if (calculateWinner(buttons) || buttons[ind]) {
      return;
    }
    buttons[ind] = flag ? "X" : "O";
    setFlag(!flag);
  };
  const calculateWinner = (buttons) => {
    const winnerArray = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8]
    ];
    for (let i = 0; i < winnerArray.length; i++) {
      const [a, b, c] = winnerArray[i];
      if (buttons[a] === buttons[b] && buttons[a] === buttons[c]) {
        return buttons[a];
      }
    }
    return null;
  };
  const winnerResult = calculateWinner(buttons);
  let result = "";
  if (winnerResult) {
    result = winnerResult;
  }
  const handleReset = () => {
    setButtons(Array(9).fill(null));
    setFlag(true);
  };
  return (
    <GameContext.Provider
      value={{
        buttons,
        setButtons,
        handleclick,
        handleReset,
        result
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
export const useGame = () => useContext(GameContext);
