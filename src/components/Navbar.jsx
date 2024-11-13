import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiSearch, FiHome, FiGlobe, FiActivity, FiFilm } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-dark-secondary shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FiGlobe className="text-highlight text-3xl" />
            <span className="text-2xl font-bold text-highlight font-headline">NewsPortal</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" icon={<FiHome />} text="Inicio" />
            <NavLink to="/category/Tecnología" icon={<FiActivity />} text="Tecnología" />
            <NavLink to="/category/Ciencia" icon={<FiActivity />} text="Ciencia" />
            <NavLink to="/category/Deportes" icon={<FiActivity />} text="Deportes" />
            <NavLink to="/category/Entretenimiento" icon={<FiFilm />} text="Entretenimiento" />
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar noticias..."
                className="bg-dark-accent text-text-primary pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-highlight"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-primary hover:text-highlight"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink to="/" icon={<FiHome />} text="Inicio" />
              <MobileNavLink to="/category/Tecnología" icon={<FiActivity />} text="Tecnología" />
              <MobileNavLink to="/category/Ciencia" icon={<FiActivity />} text="Ciencia" />
              <MobileNavLink to="/category/Deportes" icon={<FiActivity />} text="Deportes" />
              <MobileNavLink to="/category/Entretenimiento" icon={<FiFilm />} text="Entretenimiento" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text }) => (
  <Link
    to={to}
    className="flex items-center space-x-1 text-text-primary hover:text-highlight transition-colors"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

const MobileNavLink = ({ to, icon, text }) => (
  <Link
    to={to}
    className="flex items-center space-x-2 px-3 py-2 text-text-primary hover:text-highlight"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;