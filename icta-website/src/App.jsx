import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Up_Button from "./components/button-up";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen  bg-red-900 overflow-x-hidden">
      <Header />
      
      <main className="min-h-[50vh] ">
        <Outlet />
      </main>

      
      <Footer />
    </div>
  );
};

export default App;
