import * as React from "react";
import { Link } from "react-router-dom";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

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
      <NavigationMenuList className="bg-transparent">
        {data.map((menuItem) => (
          <NavigationMenuItem key={menuItem.id}>
            {menuItem.subsection && menuItem.subsection.length > 0 ? (
              <>
                <NavigationMenuTrigger>{menuItem.section}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-4 p-4">
                    {menuItem.subsection.map((sub) => (
                      <li key={sub.id}>
                        <NavigationMenuLink asChild>
                          <Link href="#">
                            <div className="font-medium">{sub.title}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link href="#">{menuItem.section}</Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
export default Navbar;
