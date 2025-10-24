import {
  MdOutlineDashboard,
  MdOutlineInventory,
  MdOutlineSettings,
} from "react-icons/md";
import { LuPencilRuler } from "react-icons/lu";
export function getSidebarContents() {
  const sidebarContents = [
    {
      label: "Home",
      icon: MdOutlineDashboard,
      path: "/",
    },
    {
      label: "Test",
      icon: LuPencilRuler,
      path: "/test",
    },
    // {
    //   label: "Inventory",
    //   icon: MdOutlineInventory,
    //   path: "/inventory",
    // },
    // {
    //   label: "Settings",
    //   icon: MdOutlineSettings,
    //   path: "/settings",
    // },
  ];
  return sidebarContents;
}
