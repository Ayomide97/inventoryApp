import Button from "../Buttons/Button";
import { LuPanelRightOpen, LuPanelLeftOpen } from "react-icons/lu";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { SetIsSidebarOpen } from "../../store/slices/sidebar";

const SideBarDrawer = () => {
  const { isSidebarOpen } = useAppSelector((state) => state.sidebar);
  const dispatch = useAppDispatch();
  const handleClickSidebarDrawer = () => {
    dispatch(SetIsSidebarOpen(!isSidebarOpen));
  };
  return (
    <div
      className={`flex items-center justify-between ${
        isSidebarOpen ? "" : "flex-col gap-y-4"
      }`}
    >
      {isSidebarOpen ? (
        <h1 className="text-2xl font-bold">Inventori</h1>
      ) : (
        <h1 className="text-2xl font-bold">I</h1>
      )}
      <Button onClick={handleClickSidebarDrawer} className="!p-1">
        <span className="text-xl">
          {isSidebarOpen ? <LuPanelRightOpen /> : <LuPanelLeftOpen />}
        </span>
      </Button>
    </div>
  );
};

export default SideBarDrawer;
