import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import { Button } from "./components/ui/button";

const App = () => {
  return (
    <div className="bg-green-300">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default App;
