import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const navItems = [
    { name: "Services", hasDropdown: true },
    { name: "Industries", hasDropdown: true },
    { name: "Models", hasDropdown: true },
    { name: "Technology", hasDropdown: false },
    { name: "Company", hasDropdown: true },
  ];

  const handleMouseEnter = (menuName) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setHoveredMenu(menuName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredMenu(null);
    }, 100); //  Adjust this delay (in milliseconds) for a smoother experience
    setHoverTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
    };
  }, [hoverTimeout]);

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 w-[90%] opacity-90 max-w-screen bg-[#404040] text-white px-6 py-4 rounded-2xl border border-gray-600 shadow-lg z-50">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">PIEPEOPLE</h1>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className="items-center hidden gap-6 text-xl md:flex">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-1 cursor-pointer hover:text-red-500">
                {item.name}
                {item.hasDropdown && (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 transition-transform duration-200"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                )}
              </div>

              {/* Dropdown Menu */}
              {item.hasDropdown && hoveredMenu === item.name && (
                <div className="absolute left-0 w-48 mt-2 text-black transition-opacity duration-300 bg-white rounded-lg shadow-lg opacity-100">
                  <div className="p-2 space-y-2">
                    <p className="px-4 py-2 cursor-pointer hover:bg-gray-200 hover:text-red-500">
                      Enterprise Application
                    </p>
                    <p className="px-4 py-2 cursor-pointer hover:bg-gray-200 hover:text-red-500">
                      Mobile Solutions
                    </p>
                    <p className="px-4 py-2 cursor-pointer hover:bg-gray-200 hover:text-red-500">
                      Cloud Solutions
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Button */}
        <button className="bg-[#C9171A] hover:bg-[#a71515] text-white px-4 py-2 rounded-lg font-semibold hidden md:block">
          Let’s Connect
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="flex flex-col items-center gap-4 pt-4 mt-4 text-sm border-t border-gray-500 md:hidden">
          {navItems.map((item) => (
            <div key={item.name} className="w-full text-center">
              <div className="flex items-center justify-center gap-1 cursor-pointer hover:text-red-500">
                {item.name}
              </div>
            </div>
          ))}
          <button className="bg-[#C9171A] hover:bg-[#a71515] text-white px-4 py-2 rounded-lg font-semibold w-full text-center">
            Let’s Connect
          </button>
        </nav>
      )}
    </div>
  );
}
