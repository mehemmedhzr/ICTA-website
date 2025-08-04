import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Sidebar = ({ menu }) => {
  const location = useLocation();
  const [openSubItem, setOpenSubItem] = useState(null);
  const [openThirdItem, setOpenThirdItem] = useState(null);

  const toggleSubItem = (id) => setOpenSubItem(openSubItem === id ? null : id);
  const toggleThirdItem = (id) => setOpenThirdItem(openThirdItem === id ? null : id);

  const renderMenuItems = (items, level = 1) => {
    return (
      <ul className={level === 1 ? "ml-4 mt-1 font-medium" : "mt-1 pr-4"}>
        {items.map((item) => {
          const isOpen =
            level === 1
              ? openSubItem === item.id
              : level === 2
              ? openThirdItem === item.id
              : false;

          const toggle =
            level === 1
              ? () => item.subsections && toggleSubItem(item.id)
              : level === 2
              ? () => item.subsections && toggleThirdItem(item.id)
              : () => {};

          return (
            <li key={item.id} className="mb-2">
              <div
                onClick={toggle}
                className={`flex justify-between items-center cursor-pointer px-4 ${
                  level === 1 ? "py-3 w-[280px] h-[44px]" : "py-2 mt-2"
                } ${
                  location.pathname === item.path
                    ? "bg-[#2D8CFF] text-white"
                    : "bg-[rgb(243,246,250)] text-[rgb(152,162,179)]"
                }`}
              >
                <Link
                  to={item.path}
                  className={`block text-sm w-full ${
                    location.pathname === item.path
                      ? "text-white"
                      : "text-[rgb(152,162,179)]"
                  }`}
                  onClick={(e) => item.subsections && e.preventDefault()}
                >
                  {item.title}
                </Link>

                {item.subsections && (
                  <ChevronRight
                    className={`transform transition-transform w-4 ml-2 ${
                      isOpen
                        ? "rotate-90 text-[rgb(152,162,179)]"
                        : "text-[rgb(152,162,179)] opacity-80"
                    }`}
                  />
                )}
              </div>

              {item.subsections && isOpen && renderMenuItems(item.subsections, level + 1)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
  <div className="hidden 2xl:block w-80 px-1 min-h-screen overflow-auto">
  <ul>
    {menu.map((item) =>
      item.subsections ? (
        <li key={item.id} className="mb-2 bg-white py-4">
          {renderMenuItems(item.subsections, 1)}
        </li>
      ) : null
    )}
  </ul>
</div>

  );
};

export default Sidebar;
