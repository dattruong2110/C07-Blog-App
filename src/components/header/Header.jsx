import { useState, useEffect, useRef } from "react";
import "./Header.css";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !searchRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <nav
        className="flex items-center justify-between p-5"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 items-center">
          <a href="/" className="-m-1.5 p-1.5">
            <img
              className="h-8 w-auto"
              src="https://static.topcv.vn/company_logos/0ZT9refQobeAkpzsYWBdyaki10IlbFB4_1655288503____f48c9fc932b36c4eec44ec23d223fa18.png"
              alt=""
            />
          </a>
          <div className="relative ml-8" ref={searchRef}>
            <input
              type="text"
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              placeholder="Search..."
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M13.32 14.91a8 8 0 111.42-1.42l5.14 5.15a1 1 0 01-1.42 1.42l-5.15-5.15zm-.55-3.35a5 5 0 10-7.07-7.07 5 5 0 007.07 7.07z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end relative">
          <div className="flex items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4">
              Viết bài chia sẻ
            </button>

            <button
              type="button"
              className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded={isDropdownOpen ? "true" : "false"}
              aria-haspopup="true"
              onClick={toggleDropdown}
            >
              <img
                className="h-8 w-8 rounded-full"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c556dc82-5d1c-4ce6-b6e2-03060f594908/defx4ci-fd1d1413-afe4-460c-b5b6-b6a3a6d6b8af.png/v1/fill/w_768,h_768,q_80,strp/vegito_blue_by_menamezapiero_defx4ci-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvYzU1NmRjODItNWQxYy00Y2U2LWI2ZTItMDMwNjBmNTk0OTA4XC9kZWZ4NGNpLWZkMWQxNDEzLWFmZTQtNDYwYy1iNWI2LWI2YTNhNmQ2YjhhZi5wbmciLCJ3aWR0aCI6Ijw9NzY4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.JlAoh-v8CXavp1s9hOFqxWrPw1qRRwiEOMTzmQXPBYo"
                alt=""
              />
            </button>
          </div>
          {isDropdownOpen && (
            <div
              className="dropdown-account absolute right-0 z-10 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabIndex="-1"
              ref={dropdownRef}
            >
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex="-1"
                id="user-menu-item-0"
              >
                Your Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex="-1"
                id="user-menu-item-1"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex="-1"
                id="user-menu-item-2"
              >
                Sign out
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
