import { createContext, useReducer } from "react";
import gameReducer, {initialState} from "./GameReducer";

//Crear el contexto
const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={[state, dispatch]}>
      {children}
    </GameContext.Provider>
  );
};


export { GameProvider };
export default GameContext;
