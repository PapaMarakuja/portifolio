import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to top when clicking navigation links
  const handleNavClick = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/about', label: 'Sobre' },
    { path: '/projects', label: 'Projetos' },
    { path: '/contact', label: 'Contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" onClick={handleNavClick} className="text-white font-bold text-xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <span className="text-primary font-extrabold">R</span>
            <span className="ml-1">Pereira</span>
          </motion.div>
        </Link>

        <nav>
          <ul className="flex space-x-6 items-center">
            {navLinks.map((link) => (
              <li key={link.path} onClick={handleNavClick}>
                <Link
                  to={link.path}
                  onClick={handleNavClick}
                  className="relative text-sm font-medium transition-colors hover:text-primary"
                >
                  {location.pathname === link.path && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary text-dark font-medium rounded-md hover:bg-primary-dark transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Currículo
              </motion.a>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;