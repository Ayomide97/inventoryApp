import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./browserRouter";
import PageLoading from "./components/PageLoading";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} fallbackElement={<PageLoading />} />
);
