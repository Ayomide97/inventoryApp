import { Outlet } from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import ErrorBoundary from "./components/ErrorBoundary";
import { Suspense } from "react";
import PageLoading from "./components/PageLoading";
import Header from "./components/Header";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <>
      <div className="flex h-screen w-full overflow-hidden">
        <ErrorBoundary>
          <SideBar />
          <div className="flex h-screen w-full flex-col relative">
            <Suspense fallback={<PageLoading />}>
              <main className="relative">
                <Header />
                <div
                  id="app-container"
                  className="bg-gray-50 h-screen dark:bg-gray-800 dark:text-gray-200 overflow-y-auto"
                >
                  <Outlet />
                </div>
                <Footer />
              </main>
            </Suspense>
          </div>
        </ErrorBoundary>
      </div>
    </>
  );
};

export default AppLayout;
