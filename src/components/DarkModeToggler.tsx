import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";
import { useDarkMode } from "../context/DarkModeContext";

const DarkModeToggler = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      onClick={toggleDarkMode}
      className={`cursor-pointer transition-transform duration-500 text-xl text-blue-500 hover:text-blue-600 ${
        darkMode ? "rotate-180 text-gray-200" : "rotate-0"
      }`}
    >
      {darkMode ? (
        <span className="flex items-center gap-2">
          <MdOutlineNightlight />
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <MdOutlineLightMode />
        </span>
      )}
    </button>
  );
};

export default DarkModeToggler;
