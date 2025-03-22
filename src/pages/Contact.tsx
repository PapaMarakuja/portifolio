import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
      setSubmitError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Tem uma pergunta ou quer trabalhar junto? Sinta-se à vontade para entrar em contato!
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-dark-lighter p-8 rounded-lg border border-dark-light">
              <h2 className="text-2xl font-bold mb-6">Envie-me uma Mensagem</h2>

              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-primary/20 border border-primary/30 text-white p-4 rounded-md mb-6"
                >
                  <p>Obrigado pela sua mensagem! Entrarei em contato o mais breve possível.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-300 mb-2">Nome</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark border border-dark-light rounded-md px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-300 mb-2">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark border border-dark-light rounded-md px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-300 mb-2">Assunto</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark border border-dark-light rounded-md px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="Job Opportunity">Oportunidade de Emprego</option>
                      <option value="Project Inquiry">Consulta de Projeto</option>
                      <option value="Collaboration">Colaboração</option>
                      <option value="Other">Outro</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-300 mb-2">Mensagem</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-dark border border-dark-light rounded-md px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                    ></textarea>
                  </div>

                  {submitError && (
                    <div className="bg-red-900/20 border border-red-900/30 text-red-200 p-4 rounded-md mb-6">
                      <p>{submitError}</p>
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 bg-primary text-dark font-medium rounded-md transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-dark'
                      }`}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : 'Enviar Mensagem'}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-dark-lighter p-8 rounded-lg border border-dark-light h-full">
              <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>

              <div className="space-y-6">
                <ContactInfoItem
                  icon="fas fa-envelope"
                  title="Email"
                  value="rafael.p.24.03@gmail.com"
                  link="mailto:rafael.p.24.03@gmail.com"
                />

                <ContactInfoItem
                  icon="fas fa-phone"
                  title="Phone"
                  value="+55 (47) 99237-3782"
                  link="tel:+5511992373782"
                />

                <ContactInfoItem
                  icon="fas fa-map-marker-alt"
                  title="Location"
                  value="Santa Catarina, Brasil"
                />
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-bold mb-4">Conecte-se Comigo</h3>
                <div className="flex space-x-4">
                  <SocialLink href="https://github.com/" icon="github" />
                  <SocialLink href="https://linkedin.com/in/" icon="linkedin" />
                  <SocialLink href="https://twitter.com/" icon="twitter" />
                  <SocialLink href="https://instagram.com/" icon="instagram" />
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-dark-light">
                <h3 className="text-xl font-bold mb-4">Disponibilidade</h3>
                <p className="text-gray-400">
                  Atualmente disponível para trabalhos freelance e oportunidades em tempo integral.
                </p>
                <div className="mt-4 bg-dark p-4 rounded-md">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-green-400 font-medium">Disponível para novos projetos</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-dark-lighter p-2 rounded-lg border border-dark-light overflow-hidden">
            <div className="h-80 w-full rounded-md overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/10 z-10 pointer-events-none"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114493.42825752332!2d-49.16833047813882!3d-26.485284944479077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94de946d2a35ca95%3A0x5bf7267a6d5569da!2sJaragu%C3%A1%20do%20Sul%2C%20SC!5e0!3m2!1sen!2sbr!4v1703195801099!5m2!1sen!2sbr"
                width="100%"
                height="100%"
                style={{ border: 1 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                className="grayscale contrast-125 brightness-75"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Contact Info Item Component
const ContactInfoItem = ({
  icon,
  title,
  value,
  link
}: {
  icon: string;
  title: string;
  value: string;
  link?: string
}) => {
  return (
    <div className="flex items-start">
      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4">
        <i className={icon}></i>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-300">{title}</h3>
        {link ? (
          <a
            href={link}
            className="text-white hover:text-primary transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-white">{value}</p>
        )}
      </div>
    </div>
  );
};

// Social Link Component
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

export default Contact;