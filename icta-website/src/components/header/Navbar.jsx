import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
} from "@/components/ui/navigation-menu";

import data from "../../../public/data/index.json";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSectionId, setOpenSectionId] = useState(null);
  const [openSubId, setOpenSubId] = useState(null);
  const [openNestedId, setOpenNestedId] = useState(null);

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

  // Helper function: check if has children safely
  const hasChildren = (item) => item.children && item.children.length > 0;

  return (
    <header className="border-b bg-white rounded-4xl sticky top-0 z-50 max-w-[1320px] mx-auto w-full px-4">
      <div className="flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="block w-100">
          <img src={logo} alt="logo" className="h-[56px] 2xl:w-[800px]" />
        </Link>

        {/* Desktop menu */}
        <NavigationMenu viewport={false} className="hidden 2xl:flex px-4">
          <NavigationMenuList className="items-center">
            {data.data.map((menuItem) => (
              <NavigationMenuItem key={menuItem.id} className="relative group">
                {menuItem.subsection?.length > 0 ? (
                  <>
                    <NavigationMenuTrigger className="font-medium text-sm flex items-center gap-1 cursor-pointer">
                      {menuItem.section}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-4 p-4">
                        {menuItem.subsection.map((sub) => {
                          const hasSubChildren = hasChildren(sub);
                          return (
                            <li
                              key={sub.id}
                              className={` relative ${
                                hasSubChildren ? "group/sub" : ""
                              }`}>
                              <div className="w-full font-medium text-xs flex items-center justify-between cursor-pointer py-2 hover:border-b-2 hover:border-blue-500">
                                <span>{sub.title}</span>
                                {hasSubChildren && (
                                  <ChevronRight className="h-3 w-3 text-gray-500" />
                                )}
                              </div>

                              {/* 2-ci səviyyə alt menyu */}
                              {hasSubChildren && (
                                <div className="absolute top-0 left-full w-[250px] pointer-events-auto  shadow-lg border rounded-md z-[10000] hidden group-hover/sub:block">
                                  <ul className="p-4 space-y-2">
                                    {sub.children.map((child) => {
                                      const hasNested = hasChildren(child);
                                      return (
                                        <li
                                          key={child.id}
                                          className={`relative ${hasNested ? "group/nested" : ""}`}>
                                          <div className="flex items-center justify-between text-xs font-medium cursor-pointer py-1 px-2 hover:text-blue-600">
                                            <span>{child.title}</span>
                                            {hasNested && (
                                              <ChevronRight className="h-3 w-3 text-gray-500" />
                                            )}
                                          </div>

                                          {/* 3-cü səviyyə alt menyu */}
                                          {hasNested && (
                                            <div className="absolute top-0 left-full w-max bg-white border rounded shadow-md ml-0 hidden group-hover/nested:block z-[10000]">
                                              <ul className="p-2 space-y-1">
                                                {child.children.map((grandChild) => (
                                                  <li key={grandChild.id}>
                                                    <NavigationMenuLink asChild>
                                                      <Link
                                                        to={grandChild.path}
                                                        className="text-xs block text-gray-700 hover:text-blue-600 px-2 py-1">
                                                        {grandChild.title}
                                                      </Link>
                                                    </NavigationMenuLink>
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                          )}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link to={menuItem.path} className="text-sm font-medium cursor-pointer">
                      {menuItem.section}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Sağ tərəf: Hamburger və Desktop Actions */}
        <div className="flex items-center gap-4">
          {/* Hamburger: 1200px-dən yuxarı gizlənir */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="flex text-[#2D8CFF] text-2xl 2xl:hidden"
            aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop actions: 1200px-dən aşağı gizlidir */}
          <div className="hidden 2xl:flex">
            <NavbarActions />
          </div>
        </div>
      </div>

      {/* Mobile menu açılması */}
      {isMobileMenuOpen && (
        <nav className="bg-white border-t w-full flex xl:block" aria-label="Mobile menu">
          <ul className="flex flex-col px-4 py-6 gap-4 w-full">
            {data.map((menuItem) => (
              <li key={menuItem.id}>
                <button
                  onClick={() =>
                    setOpenSectionId(openSectionId === menuItem.id ? null : menuItem.id)
                  }
                  className="w-full flex items-center justify-between text-sm font-semibold text-gray-900 mb-1"
                  aria-expanded={openSectionId === menuItem.id}
                  aria-controls={`section-${menuItem.id}`}>
                  <span>{menuItem.section}</span>
                  {menuItem.subsection?.length > 0 && (
                    <ChevronRight
                      className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                        openSectionId === menuItem.id ? "rotate-90" : ""
                      }`}
                    />
                  )}
                </button>

                {openSectionId === menuItem.id && menuItem.subsection?.length > 0 && (
                  <ul
                    id={`section-${menuItem.id}`}
                    className="ml-3 space-y-1 border-l border-gray-200 pl-3">
                    {menuItem.subsection.map((sub) => (
                      <li key={sub.id}>
                        <button
                          onClick={() => setOpenSubId(openSubId === sub.id ? null : sub.id)}
                          className="w-full flex items-center justify-between text-start text-sm text-gray-700 font-medium"
                          aria-expanded={openSubId === sub.id}
                          aria-controls={`subsection-${sub.id}`}>
                          <span>{sub.title}</span>
                          {hasChildren(sub) && (
                            <ChevronRight
                              className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                                openSubId === sub.id ? "rotate-90" : ""
                              }`}
                            />
                          )}
                        </button>

                        {openSubId === sub.id && hasChildren(sub) && (
                          <ul
                            id={`subsection-${sub.id}`}
                            className="ml-3 mt-1 space-y-1 border-l border-gray-100 pl-3">
                            {sub.children.map((child) => (
                              <li key={child.id}>
                                <button
                                  onClick={() =>
                                    setOpenNestedId(openNestedId === child.id ? null : child.id)
                                  }
                                  className="w-full flex items-center justify-between text-sm text-gray-600 font-normal"
                                  aria-expanded={openNestedId === child.id}
                                  aria-controls={`nested-${child.id}`}>
                                  <span>{child.title}</span>
                                  {hasChildren(child) && (
                                    <ChevronRight
                                      className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                                        openNestedId === child.id ? "rotate-90" : ""
                                      }`}
                                    />
                                  )}
                                </button>

                                {openNestedId === child.id && hasChildren(child) && (
                                  <ul
                                    id={`nested-${child.id}`}
                                    className="ml-3 mt-1 space-y-1 border-l border-gray-200 pl-3">
                                    {child.children.map((grandChild) => (
                                      <li key={grandChild.id}>
                                        <Link
                                          to="#"
                                          className="text-xs text-gray-500 hover:text-blue-600">
                                          {grandChild.title}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {/* Mobile actions */}
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
