import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../../public/svg/ICTAlogo.svg";
import NavbarActions from "./NavbarAction";
import { motion, AnimatePresence } from "framer-motion";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

import data from "../../../public/data/index.json";

const slideVariants = {
  initial: (direction) => ({
    x: direction === "forward" ? "100%" : "-100%",
    opacity: 0,
    position: "absolute",
  }),
  animate: {
    x: 0,
    opacity: 1,
    position: "relative",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: (direction) => ({
    x: direction === "forward" ? "-100%" : "100%",
    opacity: 0,
    position: "absolute",
    transition: { duration: 0.3, ease: "easeInOut" },
  }),
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuStack, setMenuStack] = useState([]);
  const [direction, setDirection] = useState("forward");
  const navigate = useNavigate();

  const currentMenu = menuStack[menuStack.length - 1] || {
    title: "Menu",
    items: data.navigation.sections,
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setMenuStack([]);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  const handleItemClick = (item) => {
    const children = item.subsections || item.routes;
    if (children && children.length > 0) {
      setDirection("forward");
      setMenuStack((prev) => [...prev, { title: item.title, items: children }]);
    } else if (item.path) {
      navigate(item.path);
      setIsMobileMenuOpen(false);
      setMenuStack([]);
    }
  };

  const handleBack = () => {
    setDirection("backward");
    setMenuStack((prev) => prev.slice(0, -1));
  };

  const resetMenu = () => {
    setMenuStack([]);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="border-b bg-white rounded-4xl sticky top-0 z-50 max-w-[1320px] mx-auto w-full">
      <div className="flex justify-around items-center gap-x-3 p-3 2xl:p-0">
        <Link to="/" onClick={resetMenu} className="block w-full">
          <img src={logo} alt="logo" className="h-[40px] 2xl:w-[800px]" />
        </Link>

        {/* Desktop menyu */}
        <NavigationMenu viewport={false} className="hidden 2xl:flex">
          <NavigationMenuList className="items-center flex">
            {data.navigation.sections.map((menuItem) => (
              <NavigationMenuItem key={menuItem.id}>
                <NavigationMenuLink asChild>
                  <NavLink
                    to={menuItem.path || "#"}
                    className={({ isActive }) =>
                      `!text-xs font-medium cursor-pointer whitespace-nowrap ${
                        isActive ? "bg-blue-600 text-white" : "text-gray-900"
                      }`
                    }
                  >
                    {menuItem.title}
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              setIsMobileMenuOpen((prev) => !prev);
              setMenuStack([]);
            }}
            className="flex text-[#2D8CFF] text-2xl 2xl:hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden 2xl:flex">
            <NavbarActions />
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="bg-white border-t w-full xl:block overflow-hidden relative h-auto min-h-[200px]" aria-label="Mobile menu">
          <AnimatePresence custom={direction} mode="wait">
            <motion.ul
              key={menuStack.length}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col px-4 py-6 gap-4 w-full"
            >
              {menuStack.length > 0 && (
                <li>
                  <button
                    onClick={handleBack}
                    className="text-sm text-blue-600 font-medium mb-2 cursor-pointer"
                  >
                    ← Geri ({currentMenu.title})
                  </button>
                </li>
              )}

              {currentMenu.items.map((item) => (
                <li key={item.title}>
                  <button
                    onClick={() => handleItemClick(item)}
                    className="text-left w-full text-xs font-medium text-gray-700 hover:text-blue-600 cursor-pointer"
                  >
                    {item.title}
                  </button>
                </li>
              ))}

              <li className="mt-6">
                <NavbarActions isMobile />
              </li>
            </motion.ul>
          </AnimatePresence>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
