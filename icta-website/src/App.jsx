import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Up_Button from "./components/button-up";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[white] overflow-x-hidden">
      <Header />
      
      <main className="flex min-h-[50vh]  justify-center ">
        <Outlet />
      </main>

      
      <Footer />
    </div>
  );
};

export default App;
