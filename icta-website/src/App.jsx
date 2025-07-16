import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import UseFul from "./components/home/useful";
import Home from "./components/home";
import Career from "./components/career/Career";


const App = () => {
  return (
      <div>
        <Header />

        <main>
          <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/career" element = {<Career />} />
          </Routes>
        </main>
        <UseFul />
        <Footer />
      </div>
  );
};

export default App;
