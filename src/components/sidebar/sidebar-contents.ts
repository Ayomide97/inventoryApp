
//Already have Tailwind + TypeScript setup 

// Defining 3 menu items with a label (text), an icon (component), and a path (URL)
// Importing this function into sidebar and render these items 


import {
  MdOutlineDashboard, // Ready made components(icons) like  Dashboard , inventory , settings
  MdOutlineInventory, 
  MdOutlineSettings,
} from "react-icons/md"; // Ready made components from icon library "React Icons"
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

