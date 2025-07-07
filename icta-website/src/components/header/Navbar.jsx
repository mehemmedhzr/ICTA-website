import * as React from "react";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { data } from "../../data/index";

function Navbar() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="bg-transparent items-center">
        {data.map((menuItem) => (
          <NavigationMenuItem key={menuItem.id} className="relative group">
            {menuItem.subsection && menuItem.subsection.length > 0 ? (
              <>
                <NavigationMenuTrigger>
                  <div className="font-medium">{menuItem.section}</div>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[350px] gap-4 p-4">
                    {menuItem.subsection.map((sub) => {
                      const hasInside =
                        sub.subsection_inside &&
                        sub.subsection_inside.length > 0;

                      return (
                        <li
                          key={sub.id}
                          className={`relative ${hasInside ? "group/sub" : ""}`}
                        >
                            <div className="w-full font-medium text-xs flex items-center justify-between cursor-pointer py-2 hover:border-b-2 hover:border-blue-500">
                              <span>{sub.title}</span>
                              {hasInside && (
                                <svg
                                  className="ml-1 h-3 w-3 text-gray-500 !font-bold"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              )}
                            </div>

                          {hasInside && (
                            <div className="subsection_inside absolute ml-3 w-[250px] bg-white shadow-lg border rounded-md !z-50 hidden group-hover/sub:block">
                              <ul className="p-4 space-y-2">
                                {sub.subsection_inside.map((subsub) => (
                                  <li key={subsub.id}>
                                    <NavigationMenuLink>
                                      <Link
                                        to="#"
                                        className="text-xs font-medium block"
                                      >
                                        {subsub.title}
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
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link to="#">{menuItem.section}</Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem>
          <div className="flex items-center justify-center gap-4 ml-4">
            <button
              type="button"
              className="font-medium text-[#2D8CFF] text-[12px] border border-[#2D8CFF] rounded-full h-8 w-8 flex items-center justify-center"
            >
              EN
            </button>
            <button
              type="button"
              className="text-xl text-[#2D8CFF] border text-[15px] border-[#2D8CFF] rounded-full h-8 w-8 flex items-center justify-center"
            >
              <IoMdSearch />
            </button>
            <button
              type="button"
              className="bg-[#2D8CFF] w-[200px] text-white font-medium text-[12px] py-5 rounded-full tracking-wider border border-[#2D8CFF]"
            >
              ELEKTRON XİDMƏTLƏR
            </button>
          </div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({ title, children, to, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={to}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm text-muted-foreground leading-snug line-clamp-2">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default Navbar;
