import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const NavbarActions = ({ isMobile = false }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [paths, setPaths] = useState([]);
  const [language, setLanguage] = useState("AZ");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/index.json")
      .then((res) => res.json())
      .then((data) => {
        const section = data.navigation.sections.find(
          (item) => item.title === "Haqqımızda"
        );
        if (section?.routes) {
          setPaths(section.routes);
        }
      });
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "AZ" ? "EN" : "AZ"));
  };

  return (
    <div
      className={`flex ${
        isMobile
          ? "flex-col gap-3 items-start"
          : "items-center gap-4 relative"
      }`}
    >
      <button
        onClick={() => setIsSearchOpen((prev) => !prev)}
        className="text-[#2D8CFF] text-lg border border-[#2D8CFF] rounded-full h-8 w-8 flex items-center justify-center relative z-20 cursor-pointer"
        aria-label="Toggle Search"
      >
        <Search className="w-4 h-4" />
      </button>

      <button
        onClick={toggleLanguage}
        className="text-[#2D8CFF] text-xs border border-[#2D8CFF] rounded-full h-8 px-2 font-medium cursor-pointer select-none"
        aria-label="Toggle Language"
      >
        {language}
      </button>

     <AnimatePresence>
  {isMobile && isSearchOpen && (
    <motion.div
      key="mobile-search"
      initial={{ opacity: 0, y: -20 }}    
      animate={{ opacity: 1, y: 0 }}    
      exit={{ opacity: 0, y: -20 }}       
      transition={{ duration: 0.3 }}
      className="relative mt-2 w-full"
      onClick={() => setIsSearchOpen(false)}
    >
      <input
        autoFocus
        type="text"
        placeholder="Axtar..."
        onClick={(e) => e.stopPropagation()}
        className="w-full border border-[#2D8CFF] rounded-full px-4 py-1 text-gray-800 outline-none pr-8"
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsSearchOpen(false);
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-[#2D8CFF] cursor-pointer"
        aria-label="Close Search"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  )}
</AnimatePresence>


      <AnimatePresence>
        {isSearchOpen && !isMobile && (
          <motion.div
            key="search-popup"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed left-162 -translate-x-1/2 z-30 w-[60%] rounded-lg bg-white flex items-center justify-between px-4 shadow-lg border border-gray-300"
            onClick={() => setIsSearchOpen(false)}
          >
            <input
              autoFocus
              type="text"
              placeholder="Axtar..."
              onClick={(e) => e.stopPropagation()}
              className="flex-grow px-4 py-3 text-gray-800 outline-none pr-8"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsSearchOpen(false);
              }}
              aria-label="Close Search"
              className="text-[#2D8CFF] cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`flex ${
          isMobile ? "flex-wrap gap-2" : "items-center gap-2"
        }`}
      >
        {paths.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`cursor-pointer font-medium text-[#2D8CFF] text-xs border border-[#2D8CFF] rounded-full h-8 ${
              isMobile ? "px-3" : "w-8"
            } flex items-center justify-center`}
          >
            {item.title}
          </button>
        ))}
      </div>

      <button
        type="button"
        className={`bg-[#2D8CFF] text-white font-medium text-[12px] px-4 rounded-full border border-[#2D8CFF] cursor-pointer ${
          isMobile ? "w-full h-[45px]" : "w-[200px] h-[60px]"
        }`}
      >
        ELEKTRON XİDMƏTLƏR
      </button>
    </div>
  );
};

export default NavbarActions;
