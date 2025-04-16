import { motion } from 'framer-motion';

const About = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Mim</h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Conheça mais sobre minha jornada, experiência e o que me motiva como desenvolvedor.
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
                alt="Rafael Pereira"
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
              <span className="gradient-text">Rafael Pereira</span>
            </h2>
            <h3 className="text-xl text-gray-300 mb-6">Fullstack Developer</h3>

            <p className="text-gray-400 mb-6">
              Sou um desenvolvedor fullstack com 5 anos de experiência na Dimensão Sistemas,
              onde tenho colaborado no desenvolvimento de uma solução web inovadora desde o início da minha carreira.
              Aos 22 anos, já desenvolvi uma forte expertise em tecnologias web modernas e uma
              paixão particular por desenvolvimento frontend.
            </p>

            <p className="text-gray-400 mb-6">
              Me especializo em construir aplicações responsivas e amigáveis usando React, TypeScript,
              Angular. Estou constantemente explorando novas tecnologias e abordagens
              para criar melhores experiências de usuário e soluções mais eficientes.
            </p>

            <div className="flex flex-wrap gap-4">
              <InfoItem label="Idade" value="22" />
              <InfoItem label="Experiência" value="5 Anos" />
              <InfoItem label="Localização" value="Brasil" />
              <InfoItem label="Freelance" value="Disponível" />
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
          <h2 className="text-3xl font-bold mb-10 text-center">Experiência Profissional</h2>

          <div className="relative border-l-2 border-primary/30 pl-8 ml-4">
            <ExperienceItem
              title="Fullstack Developer"
              company="Dimensão Sistemas"
              period="2019 - Present"
              description={[
                "Iniciei minha jornada como estagiário, onde tive a oportunidade de desenvolver o website institucional da empresa",
                "Atualmente, trabalho no desenvolvimento e manutenção do app principal da empresa, implementando melhorias e novas funcionalidades",
                "Contribuí significativamente com a implementação do modo escuro no app, melhorando a experiência dos usuários",
                "Dedico-me à resolução de problemas e otimização do desempenho das aplicações",
                "Tenho o prazer de compartilhar conhecimento e mentorear dois colegas de equipe em seu desenvolvimento profissional"
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
          <h2 className="text-3xl font-bold mb-10 text-center">Formação</h2>

          <div className="relative border-l-2 border-primary/30 pl-8 ml-4">
            <EducationItem
              degree="Técnico em Desenvolvimento de Sistemas"
              institution="IFSC - Campus Rau"
              period="2019 - 2021"
              description="Durante o curso, tive a oportunidade de aprender desde o inglês básico até o técnico, mergulhei na lógica de programação usando Java, explorei conceitos fundamentais de algoritmos e dei meus primeiros passos no desenvolvimento web."
            />

            <EducationItem
              degree="Tecnólogo em Análise e Desenvolvimento de Sistemas"
              institution="SENAC"
              period="2021 - 2024"
              description="Durante o curso, tive uma imersão profunda em desenvolvimento de software, aprendendo C#, React, React Native e Banco de Dados. Além das habilidades técnicas, desenvolvi uma visão empreendedora e inovadora, compreendendo regras de negócio e boas práticas de desenvolvimento. O ambiente de estudo intensivo e imersivo me permitiu crescer tanto como desenvolvedor quanto como profissional."
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
          <h2 className="text-3xl font-bold mb-10 text-center">Habilidades & Expertise</h2>

          <div className="space-y-8">
            <p className="text-gray-400 text-center max-w-3xl mx-auto mb-8">
              Sou um profissional que se adapta rapidamente a novas tecnologias e desafios.
              Como um "quick learner", estou constantemente expandindo meu conjunto de habilidades
              e buscando aprimorar meu conhecimento técnico para entregar soluções inovadoras.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-dark-light/30 p-6 rounded-lg hover:bg-dark-light/50 transition-all">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="text-primary mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Desenvolvimento Frontend
                </h3>
                <p className="text-gray-400 mb-4">
                  Especializado em criar interfaces modernas e responsivas com foco na experiência do usuário.
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
                  Desenvolvimento Backend
                </h3>
                <p className="text-gray-400 mb-4">
                  Experiência na construção de APIs robustas e sistemas escaláveis com foco em performance.
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
                  Banco de Dados
                </h3>
                <p className="text-gray-400 mb-4">
                  Conhecimento em modelagem, otimização e gerenciamento de bancos de dados relacionais e não-relacionais.
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
                  Desenvolvimento Mobile & DevOps
                </h3>
                <p className="text-gray-400 mb-4">
                  Experiência em desenvolvimento mobile e práticas modernas de CI/CD para entrega contínua.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Git</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Scrum</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">UI/UX</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Metodologias Ágeis</span>
                </div>
              </div>

              <div className="bg-dark-light/30 p-6 rounded-lg hover:bg-dark-light/50 transition-all">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="text-primary mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </span>
                  Idiomas & Comunicação
                </h3>
                <p className="text-gray-400 mb-4">
                  Comunicação eficaz em português e inglês, permitindo colaboração em equipes internacionais,
                  compreensão de documentação técnica e participação ativa em reuniões e apresentações.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Inglês Profissional</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Comunicação</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Documentação</span>
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