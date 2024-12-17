import './App.css';
import { AppRouter } from './AppRouter';
import { GenderProvider } from './context/GenderContext';
import { Toaster } from "react-hot-toast"; // Importar el Toaster

function App() {
  return (
    <GenderProvider>

      <AppRouter />
      <Toaster /> {/* Colocar el Toaster aquí */}

    </GenderProvider>
  );
}

export default App;