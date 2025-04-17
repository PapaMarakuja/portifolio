import { motion } from 'framer-motion';
import { getSelectedSocialLinks } from '../utils/Utils';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation('common');

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
              {t('footer.tagline')}
            </p>
          </div>

          <div className="flex space-x-4">
            {getSelectedSocialLinks(['github', 'linkedin', 'instagram']).map((social, index) => (
              <SocialLink
                key={index}
                href={social.url}
                icon={social.id}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-dark-light text-center text-gray-400 text-sm">
          <p className="text-gray-500 text-sm">
            {t('footer.copyright', { year: new Date().getFullYear() })}
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