import { GameProvider } from './context/game/GameProvider';
import AppRouter from './routers/AppRouter'


function App() {
  return (
    <div className="app">
        <GameProvider>
          <AppRouter />
        </GameProvider>
    </div>
  );
}

export default App;
