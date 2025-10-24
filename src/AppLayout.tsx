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
          <div className="flex h-screen w-full flex-col overflow-y-auto">
            <Suspense fallback={<PageLoading />}>
              <main className="h-full">
                <Header />
                <div id="app-container" className="bg-gray-50">
                  <Outlet />
                </div>
              </main>
            </Suspense>
          </div>
        </ErrorBoundary>
      </div>
    </>
  );
};

export default AppLayout;
