import { StrictMode } from "react";
import "./index.css";
import { DarkModeProvider } from "./context/DarkModeContext";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";

const indexRoute = () => {
  return (
    <Provider store={store}>
      <StrictMode>
        <DarkModeProvider>
          <App />
        </DarkModeProvider>
      </StrictMode>
    </Provider>
  );
};

export default indexRoute;
