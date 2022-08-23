import { useGame } from "../context/GameContext";
import "../styles.css";

const Board = () => {
  const { buttons, handleclick } = useGame();
  return (
    <div className="board">
      {buttons.map((el, ind) => (
        <button
          key={Math.random() * 14000000}
          className="buttons"
          onClick={() => handleclick(ind)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};
export default Board;
