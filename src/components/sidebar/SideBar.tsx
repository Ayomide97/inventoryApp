import SideBarDrawer from "./SideBarDrawer";
import { getSidebarContents } from "./sidebar-contents";
import SideBarButton from "./SideBarButton";
import { useAppSelector } from "../../hooks/redux";

const SideBar = () => {
  const sidebarContents = getSidebarContents();
  const { isSidebarOpen } = useAppSelector((state) => state.sidebar);
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // const openSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // }
  return (
    <div
      className={`h-full bg-gray-100 py-3 border-r-2 border-gray-200 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 ${
        isSidebarOpen ? "w-64 px-3" : "w-[59px] px-2"
      }`}
    >
      <SideBarDrawer />
      <div className="flex flex-col gap-2 my-4">
        {sidebarContents.map((content) => {
          const { icon: Icon, ...rest } = content;
          return (
            <SideBarButton
              key={content.label}
              {...rest}
              icon={Icon ? <Icon /> : null}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
