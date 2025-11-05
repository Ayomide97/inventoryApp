import { createBrowserRouter, Outlet } from "react-router-dom";
import IndexRoute from "./IndexRoute";
import ErrorBoundary from "./components/ErrorBoundary";
import Dashboard from "./pages/Dashboard";
import Test from "./pages/Test";
import Inventory from "./pages/Inventory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexRoute />,
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
        path: "test",
        element: <Test />,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
    ],
  },
]);
