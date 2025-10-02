import { Outlet } from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import ErrorBoundary from "./components/ErrorBoundary";
import { Suspense } from "react";
import PageLoading from "./components/PageLoading";
import Header from "./components/Header";

const AppLayout = () => {
  return (
    <>
      <div className="flex h-screen w-full overflow-hidden">
        <ErrorBoundary>
          <SideBar />
          <div className="flex h-screen w-full flex-col overflow-y-auto bg-red-500">
            <Suspense fallback={<PageLoading />}>
              <main className="bg-blue-500 h-full">
                <Header />
                <Outlet />
              </main>
            </Suspense>
          </div>
        </ErrorBoundary>
      </div>
    </>
  );
};

export default AppLayout;
