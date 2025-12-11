import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import LanguageSelector from "./LanguageSwitch";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navigation = [
    { name: "nav.home", href: "/", icon: "pi pi-home" },
    { name: "nav.about", href: "/about", icon: "pi pi-user" },
    { name: "nav.projects", href: "/projects", icon: "pi pi-briefcase" },
    { name: "nav.skills", href: "/skills", icon: "pi pi-cog" },
    { name: "nav.experience", href: "/experience", icon: "pi pi-calendar" },
    { name: "nav.education", href: "/education", icon: "pi pi-book" },
    { name: "nav.blog", href: "/blog", icon: "pi pi-file-edit" },
    { name: "nav.contact", href: "/contact", icon: "pi pi-envelope" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full transition-colors duration-300 border-b bg-slate-900/95 dark:bg-gray-900/95 backdrop-blur-sm border-slate-700 dark:border-gray-600">
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-linear-to-r from-blue-500 to-cyan-500">
                <i className="text-lg text-white pi pi-code"></i>
              </div>
              <span className="text-xl font-bold text-white dark:text-gray-100">
                HOANGHOAN
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden md:flex">
            <div className="flex space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 transition-colors ${
                    location.pathname === item.href
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 dark:text-gray-400 hover:bg-slate-700 dark:hover:bg-gray-700 hover:text-white dark:hover:text-gray-200"
                  }`}
                >
                  <i className={item.icon}></i>
                  <span>{t(item.name)}</span>
                </Link>
              ))}
            </div>

            <div className="ml-4">
              <LanguageSelector />
            </div>
          </div>

          <div className="flex items-center md:hidden gap-2">
            <div className="scale-90">
              <LanguageSelector />
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <i
                className={`pi ${isOpen ? "pi-times" : "pi-bars"} text-xl`}
              ></i>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 mt-2 space-y-1 transition-colors duration-300 rounded-lg bg-slate-800 dark:bg-gray-800">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex px-3 py-2 rounded-md text-base font-medium items-center space-x-2 transition-colors ${
                    location.pathname === item.href
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 dark:text-gray-400 hover:bg-slate-700 dark:hover:bg-gray-700 hover:text-white dark:hover:text-gray-200"
                  }`}
                >
                  <i className={item.icon}></i>
                  <span>{t(item.name)}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
