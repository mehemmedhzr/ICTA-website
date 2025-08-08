import React, { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Up_Button from "./components/button-up";
import LoadingPage from "./pages/loading";

const App = () => {
  const location = useLocation();
  const isNotFoundPage = location.pathname === "/404"; // sadə və sabit

  return (
    <Suspense fallback={<LoadingPage />}>
      <div className="flex flex-col min-h-screen">
        {!isNotFoundPage && <Header />}
        
        <main className="flex-grow">
          <Outlet />
        </main>

        {!isNotFoundPage && <Footer />}
        {!isNotFoundPage && <Up_Button />}
      </div>
    </Suspense>
  );
};

export default App;
