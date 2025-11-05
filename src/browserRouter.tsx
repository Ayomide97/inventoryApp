import { createBrowserRouter, Outlet } from "react-router-dom";
import Index from "./index";
import ErrorBoundary from "./components/ErrorBoundary";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: (
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
    ],
  },
]);
