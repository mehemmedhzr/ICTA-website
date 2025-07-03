import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
