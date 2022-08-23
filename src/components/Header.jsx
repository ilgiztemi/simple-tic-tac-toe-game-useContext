import { useGame } from "../context/GameContext";
import "../styles.css";

const Header = () => {
  const { result, handleReset } = useGame();
  return (
    <div>
      <button onClick={() => handleReset()} className="restart-btn">
        Restart
      </button>
      <h1 className="winner">Winner: {result}</h1>
    </div>
  );
};
export default Header;
