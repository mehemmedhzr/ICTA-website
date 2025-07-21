import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import logo from "../../../public/svg/ICTAlogo.svg";
import NavbarActions from "./NavbarAction";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../components/ui/navigation-menu";

import data from "../../../public/data/index.json";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSectionId, setOpenSectionId] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  return (
    <header className="border-b bg-white rounded-4xl sticky top-0 z-50 max-w-[1320px] mx-auto w-full">
      <div className="flex justify-between items-center  gap-x-10">
        <Link to="/" className="block w-full">
          <img src={logo} alt="logo" className="h-[50px] 2xl:w-[800px] px-6" />
        </Link>

        <NavigationMenu viewport={false} className="hidden 2xl:flex ">
          <NavigationMenuList className="items-center flex">
            {data.navigation.sections.map((menuItem) => (
              <NavigationMenuItem key={menuItem.id}>
                <NavigationMenuLink asChild>
                  <NavLink
                    to={menuItem.path}
                    className={({ isActive }) =>
                      `!text-xs font-medium cursor-pointer whitespace-nowrap ${
                        isActive ? "bg-blue-600 text-white" : "text-gray-900"
                      }`
                    }>
                    {menuItem.title}
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="flex text-[#2D8CFF] text-2xl 2xl:hidden"
            aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden 2xl:flex">
            <NavbarActions />
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="bg-white border-t w-full flex xl:block" aria-label="Mobile menu">
          <ul className="flex flex-col px-4 py-6 gap-4 w-full">
            {data.navigation.sections.map((menuItem) => (
              <li key={menuItem.id}>
                <button
                  onClick={() =>
                    setOpenSectionId(openSectionId === menuItem.id ? null : menuItem.id)
                  }
                  className="w-full flex items-center justify-between text-sm font-semibold text-gray-900 mb-1"
                  aria-expanded={openSectionId === menuItem.id}
                  aria-controls={`section-${menuItem.id}`}>
                  <span>{menuItem.title}</span>
                  {menuItem.subsection?.length > 0 && (
                    <ChevronRight
                      className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                        openSectionId === menuItem.id ? "rotate-90" : ""
                      }`}
                    />
                  )}
                </button>
              </li>
            ))}

            <li className="mt-6">
              <NavbarActions isMobile />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
