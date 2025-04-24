import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";


const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 text-white">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight font-bold">Hexa Lab</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex ml-14 space-x-10">
            <li>
              <Link
                to="visi"
                smooth={true}
                duration={800}
                offset={-70}
                className="hover:text-red-400 cursor-pointer"
              >
                Vision and Mission
              </Link>
            </li>
            <li>
              <Link
                to="Feature"
                smooth={true}
                duration={800}
                offset={-70}
                className="hover:text-red-400 cursor-pointer"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="roadmap"
                smooth={true}
                duration={800}
                offset={-70}
                className="hover:text-red-400 cursor-pointer"
              >
                Roadmap
              </Link>
            </li>
          </ul>


          {/* Mobile Menu Button */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 top-0 z-20 bg-neutral-900 w-full h-screen p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="text-center space-y-6 text-lg">
              <li>
                <Link
                  to="visi"
                  smooth={true}
                  duration={800}
                  offset={-70}
                  onClick={toggleNavbar}
                  className="cursor-pointer"
                >
                  Vision and Mission
                </Link>
              </li>
              <li>
                <Link
                  to="Feature"
                  smooth={true}
                  duration={800}
                  offset={-70}
                  onClick={toggleNavbar}
                  className="cursor-pointer"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="roadmap"
                  smooth={true}
                  duration={800}
                  offset={-70}
                  onClick={toggleNavbar}
                  className="cursor-pointer"
                >
                  Roadmap
                </Link>
              </li>
            </ul>

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
