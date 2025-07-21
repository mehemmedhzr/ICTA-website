import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[rgb(243,246,250)]">
      <Header />
      
      <main className="flex min-h-[50vh]  justify-center mt-12">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default App;
