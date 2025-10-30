import React from "react";
import { getSidebarContents } from "./sidebar-contents";

//TypeScript type definition - what kind of data(props) <Sidebar /> component is expecting.
type SidebarProps = {

// The current route (used to highlight the active item). 
activePath?: string;

//What to do when a user clicks a menu item 
onNavigate?: (path: string) => void;

// Small title at the top of the sidebar.
title?: string;

};


const SideBar = ({
  
  activePath = "/",
  onNavigate,
  title = "Inventory"}: SidebarProps) => {

 //Pull Items from the data file 
  const {dashboard, inventory, settings} = getSidebarContents();

  //Top list/part (main navigation) , render "Settings" in the footer
  const items = [dashboard, inventory];

  function handleClick(path: string){

    if(onNavigate)
    {

      onNavigate(path); //Let the parent (or router) decide what to do

    }else
    {
      window.location.href = path; //Basic fallback 
    }

  }

  return (
  
    // <aside> => semantic tag tells browsers “this is a sidebar or extra section.""
    //<aside> => used for Sidebars, tool panels, ads, or related links
    <aside className="w-64 h-full flex flex-col border-l bg-white rounded-2xl"> 
    
    {/* Header (logo blob + title)*/}

    <div className="px-4 py-3 border-b">

      <div className="flex items-center gap-2">
        <div className="size-8 rounded-xl bg-linear-to-br from-blue-600 to-sky-400 "/>
        <span className="text-sm font-semibold">{title}</span>
      </div>

    </div>

    {/* Main navigation list */}

    <nav className="flex-1 p-2">
      <ul className="space-y-1">

        {items.map((item)=>{
          
          const isActive = activePath === item.path;

          return (

            <li key={item.path}>
              <button type="button" onClick={()=> handleClick(item.path)}

                className={["w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition", "hover:bg-zinc-100", isActive ? "bg-blue-50 text-blue-700 border border-blue-100 cursor-pointer" : "text-zinc-700"]
                .join('') }

              >

              <span className="inline-flex items-center justify-center size-8 rounded-lg bg-zinc-100 text-zinc-700">
                  <item.icon className="size-4" />
              </span>

              <span className="truncate">{item.label}</span>

              </button>
            </li>
          );
        })}
      </ul>
    </nav>

    {/* Footer(Settings row + user card) */}

    <div className="px-3 py-2 border-t space-y-2">

      {/* Settings button */}

      <button type="button" onClick={()=> handleClick(settings.path)}
        className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm hover:bg-zince-100 text-zinc-700 cursor-pointer"
      >
        <span className="inline-flex items-center justify-center size-8 rounded-lg bg-zinc-100 text-zinc-700">
          <settings.icon className="size-4"/>
        </span>
        <span className="truncate">{settings.label}</span>
      </button>

      {/* User card (the small profile block) */}

      <div className="flex items-center gap-3 px-2 py-2 cursor-pointer">

        <img src= "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=160&auto=format&fit=crop"
          alt="User-avatar"
          className="size-10 rounded-xl object-cover"
        />

        <div className="min-w-0">
          <p className="text-sm font-medium truncate">Random Name</p>
          <p className="text-xs text-zinc-500 truncate">username@untitled.com</p>
        </div>

      </div>
    </div>
    </aside>
  );
};

export default SideBar;

