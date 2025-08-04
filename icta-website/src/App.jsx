import React, { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Up_Button from "./components/button-up";
import LoadingPage from "./pages/loading";

const App = () => {
  const location = useLocation();
  const isLayoutHidden = location.pathname === "/404" || location.state?.isNotFound;

  return (
        <Suspense fallback={<LoadingPage />}>
    <div className="flex flex-col min-h-screen">
      {!isLayoutHidden && <Header />}

      <div>
          <Outlet />
      </div>

      {!isLayoutHidden && <Footer />}
    </div>
        </Suspense>
  );
};

export default App;
