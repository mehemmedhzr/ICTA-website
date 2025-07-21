import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Sidebar = ({ menu }) => {
  const location = useLocation();
  const [openSubItem, setOpenSubItem] = useState(null);
  const [openThirdItem, setOpenThirdItem] = useState(null);

  const toggleSubItem = (id) => setOpenSubItem(openSubItem === id ? null : id);
  const toggleThirdItem = (id) =>
    setOpenThirdItem(openThirdItem === id ? null : id);

  return (
    <div className="w-80 px-1 min-h-screen overflow-auto">
      <ul>
        {menu.map((item) =>
          item.subsections ? (
            <li key={item.id} className="mb-2 bg-white py-4">
              <ul className="ml-4 mt-1 font-medium">
                {item.subsections.map((sub) => (
                  <li key={sub.id} className="mb-2">
                    <div
                      onClick={() => sub.subsections && toggleSubItem(sub.id)}
                      className={`flex justify-between items-center cursor-pointer px-4 py-3 w-[280px] h-[44px]
                        ${
                          location.pathname === sub.path
                            ? "bg-[#2D8CFF]"
                            : "bg-[rgb(243,246,250)]"
                        }`}
                    >
                      <Link
                        to={sub.path}
                        className={`block text-sm ${
                          location.pathname === sub.path
                            ? "text-white"
                            : "text-[rgb(152,162,179)]"
                        }`}
                        onClick={(e) => sub.subsections && e.preventDefault()}
                      >
                        {sub.title}
                      </Link>

                      <ChevronRight
                        className={`transform transition-transform w-4 ml-2 ${
                          sub.subsections
                            ? openSubItem === sub.id
                              ? location.pathname === sub.path
                                ? "rotate-90 text-white"
                                : "rotate-90 text-[rgb(152,162,179)]"
                              : location.pathname === sub.path
                              ? "text-white"
                              : "text-[rgb(152,162,179)]"
                            : location.pathname === sub.path
                            ? "text-white"
                            : "text-[rgb(152,162,179)]"
                        }`}
                      />
                    </div>

                    {sub.subsections && openSubItem === sub.id && (
                      <ul className="mt-1 pr-4">
                        {sub.subsections.map((subsub) => (
                          <li key={subsub.id} className="mb-2">
                            <div
                              onClick={() =>
                                subsub.subsections && toggleThirdItem(subsub.id)
                              }
                              className={`flex justify-between items-center cursor-pointer px-4 py-2 mt-2 
            ${
              location.pathname === subsub.path
                ? "bg-[#2D8CFF] text-white"
                : "bg-[rgb(243,246,250)] text-[rgb(152,162,179)]"
            }`}
                            >
                              <Link
                                to={subsub.path}
                                className="block text-sm w-full"
                                onClick={(e) =>
                                  subsub.subsections && e.preventDefault()
                                }
                              >
                                {subsub.title}
                              </Link>

                              {subsub.subsections && (
                                <ChevronRight
                                  className={`transform transition-transform w-4 ml-2 ${
                                    openThirdItem === subsub.id
                                      ? "rotate-90 text-[rgb(152,162,179)]"
                                      : "text-[rgb(152,162,179)]"
                                  }`}
                                />
                              )}
                            </div>

                            {subsub.subsections &&
                              openThirdItem === subsub.id && (
                                <ul className="mt-1">
                                  {subsub.subsections.map((subsubsub) => (
                                    <li key={subsubsub.id} className="mb-1">
                                      <Link
                                        to={subsubsub.path}
                                        className={`block text-sm px-4 py-2 mt-2 ${
                                          location.pathname === subsubsub.path
                                            ? "bg-[#2D8CFF] text-white"
                                            : "bg-[rgb(243,246,250)] text-[rgb(152,162,179)]"
                                        }`}
                                      >
                                        {subsubsub.title}
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
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
