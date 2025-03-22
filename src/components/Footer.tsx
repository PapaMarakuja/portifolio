import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-dark-lighter py-8 border-t border-dark-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <span className="text-primary font-extrabold text-xl">R</span>
              <span className="ml-1 text-white font-bold text-lg">Pereira</span>
            </motion.div>
            <p className="text-gray-400">
              Desenvolvedor Fullstack com paixão por soluções criativas
            </p>
          </div>
          
          <div className="flex space-x-4">
            <SocialLink href="https://github.com/" icon="github" />
            <SocialLink href="https://linkedin.com/in/" icon="linkedin" />
            <SocialLink href="https://twitter.com/" icon="twitter" />
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-dark-light text-center text-gray-400 text-sm">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Rafael Pereira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: string }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-dark-light flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <i className={`fab fa-${icon}`}></i>
    </motion.a>
  );
};

export default Footer;