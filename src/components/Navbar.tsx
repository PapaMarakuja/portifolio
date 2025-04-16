import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllSocialLinks } from '../utils/Utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const socialLinks = getAllSocialLinks();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    if (!isMenuOpen) {
      window.scrollTo(0, 0);
      setTimeout(() => {
        setIsMenuOpen(true);
      }, 10);
    } else {
      setIsMenuOpen(false);
    }
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
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

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };

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

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden text-white focus:outline-none z-50 relative"
          onClick={handleMenuToggle}
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <motion.div
              className="w-6 h-0.5 bg-white absolute"
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 0 : -4
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="w-6 h-0.5 bg-white absolute"
              animate={{
                opacity: isMenuOpen ? 0 : 1
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="w-6 h-0.5 bg-white absolute"
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? 0 : 4
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.button>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
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
          </ul>
        </nav>
      </div>

      {/* Mobile menu - fullscreen overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-b from-dark to-primary/90 z-40 md:hidden flex flex-col justify-center"
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              height: '100vh',
              overflowY: 'auto'
            }}
          >
            <div className="container mx-auto px-8 py-10 h-full flex flex-col justify-center">
              <ul className="flex flex-col space-y-8 items-start">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.path}
                    custom={i}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="w-full"
                  >
                    <Link
                      to={link.path}
                      onClick={handleNavClick}
                      className={`block text-2xl font-bold transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-white/80'
                        }`}
                    >
                      <div className="flex items-center">
                        {link.label}
                        {location.pathname === link.path && (
                          <motion.div
                            className="w-1 h-6 bg-primary ml-3"
                            layoutId="mobileActiveIndicator"
                          />
                        )}
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                className="mt-auto pt-10 flex flex-col space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="text-white/70 text-sm">
                  <p>Desenvolvedor Full Stack</p>
                  <p>© {new Date().getFullYear()}</p>
                </div>
                <div className="flex space-x-5">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="text-white/80 hover:text-primary transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className={`${social.icon} text-xl`}></i>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;