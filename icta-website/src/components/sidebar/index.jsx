import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Sidebar = ({ menu }) => {
  const location = useLocation();

  const [openSubItem, setOpenSubItem] = useState(null);
  const [openThirdItem, setOpenThirdItem] = useState(null); // üçüncü səviyyə üçün

  const toggleSubItem = (id) => setOpenSubItem(openSubItem === id ? null : id);
  const toggleThirdItem = (id) => setOpenThirdItem(openThirdItem === id ? null : id);

  return (
    <div className="w-80 bg-gray-100 p-4 min-h-screen overflow-auto">
      <ul>
        {menu.map((item) =>
          item.subsections ? (
            <li key={item.id} className="mb-2">
              <ul className="ml-4 mt-1 border-gray-300">
                {item.subsections.map((sub) => (
                  <li key={sub.id} className="mb-2">
                    <div
                      onClick={() => sub.subsections && toggleSubItem(sub.id)}
                      className={`flex justify-between items-center cursor-pointer px-4 py-3 w-[280px] h-[44px]
                        ${
                          location.pathname === sub.path
                            ? "bg-blue-700"
                            : "bg-[rgb(243,246,250)] border"
                        }`}>
                      <Link
                        to={sub.path}
                        className={`block text-sm ${
                          location.pathname === sub.path ? "text-white" : "text-[rgb(152,162,179)]"
                        }`}
                        onClick={(e) => sub.subsections && e.preventDefault()}>
                        {sub.title}
                      </Link>
                      {sub.subsections && (
                        <ChevronRight
                          className={`transform transition-transform w-4 text-[rgb(152,162,179)] ${
                            openSubItem === sub.id ? "rotate-90" : ""
                          }`}
                        />
                      )}
                    </div>

                    {sub.subsections && openSubItem === sub.id && (
                      <ul className="mt-1 border-gray-200 pl-3">
                        {sub.subsections.map((subsub) => (
                          <li key={subsub.id} className="mb-1">
                            <div
                              onClick={() =>
                                subsub.subsections && toggleThirdItem(subsub.id)
                              }
                              className="flex justify-between items-center cursor-pointer">
                              <Link
                                to={subsub.path}
                                className={`block text-sm hover:underline ${
                                  location.pathname === subsub.path
                                    ? "text-blue-600"
                                    : "text-gray-600"
                                }`}
                                onClick={(e) =>
                                  subsub.subsections && e.preventDefault()
                                }>
                                {subsub.title}
                              </Link>
                              {subsub.subsections && (
                                <ChevronRight
                                  className={`transform transition-transform w-3 text-gray-400 ml-1 ${
                                    openThirdItem === subsub.id ? "rotate-90" : ""
                                  }`}
                                />
                              )}
                            </div>

                            {subsub.subsections && openThirdItem === subsub.id && (
                              <ul className="pl-4 mt-1 border-l border-gray-200">
                                {subsub.subsections.map((subsubsub) => (
                                  <li key={subsubsub.id} className="mb-1">
                                    <Link
                                      to={subsubsub.path}
                                      className={`block text-sm hover:underline ${
                                        location.pathname === subsubsub.path
                                          ? "text-blue-600"
                                          : "text-gray-500"
                                      }`}>
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
