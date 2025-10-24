import { useDarkMode } from "../../context/DarkModeContext";

type SpinnerLoaderProps = {
  height?: number | string;
  width?: number | string;
};

function Spinner({ height, width = "6.4rem" }: SpinnerLoaderProps) {
  const { darkMode } = useDarkMode();
  const spinnerClasses = `spinner ${darkMode ? "dark" : "light"}`;
  return <div className={spinnerClasses} style={{ height, width }}></div>;
}

export default Spinner;
