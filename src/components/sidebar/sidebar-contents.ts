import {
  MdOutlineDashboard,
  MdOutlineInventory,
  MdOutlineSettings,
} from "react-icons/md";
export function getSidebarContents() {
  const dashboard = {
    label: "Home",
    icon: MdOutlineDashboard,
    path: "/",
  };
  const inventory = {
    label: "Inventory",
    icon: MdOutlineInventory,
    path: "/inventory",
  };
  const settings = {
    label: "Settings",
    icon: MdOutlineSettings,
    path: "/settings",
  };
  return { dashboard, inventory, settings };
}
