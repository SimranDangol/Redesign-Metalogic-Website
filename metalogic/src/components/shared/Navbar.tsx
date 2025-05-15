import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";

type NavItem = {
  path: string;
  name: string;
};

const navItems: NavItem[] = [
  { path: "/", name: "Home" },
  { path: "/services", name: "Services" },
  { path: "/career", name: "Career" },
  { path: "/blogs", name: "Blogs" },
  { path: "/about", name: "About Us" },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#062A5F] text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo*/}
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <img src={logo} alt="MetaLogic Logo" className="h-8 w-auto" />
          <span className="text-2xl font-bold text-white">MetaLogic</span>
        </Link>

        {/* Desktop Nav Links - Hidden on mobile */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const isHovered = hoveredPath === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onMouseEnter={() => setHoveredPath(item.path)}
                onMouseLeave={() => setHoveredPath(null)}
                className={`relative text-sm lg:text-base font-medium ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <span>{item.name}</span>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300 ease-in-out ${
                    isActive || isHovered ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button*/}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Contact Button */}
        <div className={`${mobileMenuOpen ? "hidden" : "block"}`}>
          <button
            onClick={() => navigate("/contact")}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm lg:text-base transition-colors duration-300"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#062A5F] shadow-lg py-4 px-6">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={toggleMobileMenu}
                    className={`text-lg font-medium ${
                      isActive ? "text-white font-semibold" : "text-white/80"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <button
                onClick={() => {
                  navigate("/contact");
                  toggleMobileMenu();
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-lg font-medium mt-4 transition-colors duration-300"
              >
                Get in Touch
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
