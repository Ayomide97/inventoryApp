import { StrictMode } from "react";
import "./index.css";
import { DarkModeProvider } from "./context/DarkModeContext";
import App from "./App";

const index = () => {
  return (
    <StrictMode>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </StrictMode>
  );
};

export default index;
