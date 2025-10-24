import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { SetActiveSidebarItem } from "../../store/slices/sidebar";

interface SideBarButtonsProps {
  label: string;
  icon: React.ReactNode;
  path: string;
}

const SideBarButton = ({ label, icon, path }: SideBarButtonsProps) => {
  const dispatch = useAppDispatch();
  const { activeSidebarItem, isSidebarOpen } = useAppSelector(
    (state) => state.sidebar
  );

  const handleClickSidebarItem = () => {
    dispatch(SetActiveSidebarItem(label));
  };
  return (
    <Link to={path}>
      <Button
        className={`w-full ${
          isSidebarOpen ? "justify-start" : "justify-center"
        } ${activeSidebarItem === label ? "bg-blue-500 text-white" : ""}`}
        onClick={handleClickSidebarItem}
      >
        <span className={`text-2xl ${isSidebarOpen ? "" : "block px-2"}`}>
          {icon}
        </span>
        {isSidebarOpen && <span className="ml-2">{label}</span>}
      </Button>
    </Link>
  );
};

export default SideBarButton;
