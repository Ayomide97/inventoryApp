import DarkModeToggler from "./DarkModeToggler";
import Heading from "./Heading";

const Header = () => {
  return (
    <header
      className="flex justify-between items-center border-b-2 border-gray-200 px-6 py-4 header sticky
   top-0 left-0 right-0 z-50 w-full bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
    >
      <Heading type="h1">Header</Heading>
      <DarkModeToggler />
    </header>
  );
};

export default Header;
