import "./App.css";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <>
      <DarkModeProvider>
        <h1>Inventory Management System</h1>
      </DarkModeProvider>
    </>
  );
}

export default App;
