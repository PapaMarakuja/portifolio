import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation(['about', 'common']);

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about:hero.title')}</h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            {t('about:hero.description')}
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-lg blur-lg"></div>
              <img
                src="./images/profile.png"
                alt={t('about:profile.name')}
                className="w-full h-auto rounded-lg relative z-10"
                loading='lazy'
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">
              <span className="gradient-text">{t('about:profile.name')}</span>
            </h2>
            <h3 className="text-xl text-gray-300 mb-6">{t('about:profile.title')}</h3>

            <p className="text-gray-400 mb-6">
              {t('about:profile.bio1')}
            </p>

            <p className="text-gray-400 mb-6">
              {t('about:profile.bio2')}
            </p>

            <div className="flex flex-wrap gap-4">
              <InfoItem label={t('about:info.age.label')} value={t('about:info.age.value')} />
              <InfoItem label={t('about:info.experience.label')} value={t('about:info.experience.value')} />
              <InfoItem label={t('about:info.location.label')} value={t('about:info.location.value')} />
              <InfoItem label={t('about:info.freelance.label')} value={t('about:info.freelance.value')} />
            </div>
          </motion.div>
        </div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">{t('about:experience.title')}</h2>

          <div className="relative border-l-2 border-primary/30 pl-8 ml-4">
            <ExperienceItem
              title={t('about:experience.items.dimensao.title')}
              company={t('about:experience.items.dimensao.company')}
              period={t('about:experience.items.dimensao.period')}
              description={[
                t('about:experience.items.dimensao.description.0'),
                t('about:experience.items.dimensao.description.1'),
                t('about:experience.items.dimensao.description.2'),
                t('about:experience.items.dimensao.description.3'),
                t('about:experience.items.dimensao.description.4')
              ]}
            />
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center">{t('about:education.title')}</h2>

          <div className="relative border-l-2 border-primary/30 pl-8 ml-4">
            <EducationItem
              degree={t('about:education.items.ifsc.degree')}
              institution={t('about:education.items.ifsc.institution')}
              period={t('about:education.items.ifsc.period')}
              description={t('about:education.items.ifsc.description')}
            />

            <EducationItem
              degree={t('about:education.items.senac.degree')}
              institution={t('about:education.items.senac.institution')}
              period={t('about:education.items.senac.period')}
              description={t('about:education.items.senac.description')}
            />
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">{t('about:skills.title')}</h2>

          <div className="space-y-8">
            <p className="text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed text-base md:text-lg px-2 md:px-4 text-left md:text-left">
              {t('about:skills.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-dark-light/30 p-6 rounded-lg hover:bg-dark-light/50 transition-all">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="text-primary mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {t('about:skills.categories.frontend.title')}
                </h3>
                <p className="text-gray-400 mb-4">
                  {t('about:skills.categories.frontend.description')}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Angular</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">HTML/CSS</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Bootstrap CSS</span>
                </div>
              </div>

              <div className="bg-dark-light/30 p-6 rounded-lg hover:bg-dark-light/50 transition-all">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="text-primary mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {t('about:skills.categories.backend.title')}
                </h3>
                <p className="text-gray-400 mb-4">
                  {t('about:skills.categories.backend.description')}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">C#</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">RESTful APIs</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">OData</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">GraphQL</span>
                </div>
              </div>

              <div className="bg-dark-light/30 p-6 rounded-lg hover:bg-dark-light/50 transition-all">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="text-primary mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                      <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                      <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                    </svg>
                  </span>
                  {t('about:skills.categories.database.title')}
                </h3>
                <p className="text-gray-400 mb-4">
                  {t('about:skills.categories.database.description')}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">MySQL</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">SQL Server</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">PostgreSQL</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">ORM</span>
                </div>
              </div>

              <div className="bg-dark-light/30 p-6 rounded-lg hover:bg-dark-light/50 transition-all">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="text-primary mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {t('about:skills.categories.devops.title')}
                </h3>
                <p className="text-gray-400 mb-4">
                  {t('about:skills.categories.devops.description')}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Git</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Scrum</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">UI/UX</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">{t('about:skills.categories.devops.agile')}</span>
                </div>
              </div>

              <div className="bg-dark-light/30 p-6 rounded-lg hover:bg-dark-light/50 transition-all">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="text-primary mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </span>
                  {t('about:skills.categories.languages.title')}
                </h3>
                <p className="text-gray-400 mb-4">
                  {t('about:skills.categories.languages.description')}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">{t('about:skills.categories.languages.english')}</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">{t('about:skills.categories.languages.communication')}</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">{t('about:skills.categories.languages.documentation')}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="bg-dark-light px-4 py-2 rounded-md">
      <span className="text-gray-400">{label}:</span>{" "}
      <span className="text-white font-medium">{value}</span>
    </div>
  );
};

const ExperienceItem = ({
  title,
  company,
  period,
  description
}: {
  title: string;
  company: string;
  period: string;
  description: string[]
}) => {
  return (
    <div className="mb-12 relative">
      <div className="absolute -left-12 top-0 w-6 h-6 bg-primary rounded-full"></div>
      <div className="absolute -left-[10px] top-0 w-2 h-2 bg-white rounded-full"></div>

      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <div className="flex items-center mb-4">
        <span className="text-primary">{company}</span>
        <span className="mx-2 text-gray-500">•</span>
        <span className="text-gray-400">{period}</span>
      </div>

      <ul className="list-disc pl-5 text-gray-400 space-y-2">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const EducationItem = ({
  degree,
  institution,
  period,
  description
}: {
  degree: string;
  institution: string;
  period: string;
  description: string
}) => {
  return (
    <div className="mb-12 relative">
      <div className="absolute -left-12 top-0 w-6 h-6 bg-primary rounded-full"></div>
      <div className="absolute -left-[10px] top-0 w-2 h-2 bg-white rounded-full"></div>

      <h3 className="text-xl font-bold mb-1">{degree}</h3>
      <div className="flex items-center mb-4">
        <span className="text-primary">{institution}</span>
        <span className="mx-2 text-gray-500">•</span>
        <span className="text-gray-400">{period}</span>
      </div>

      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default About;