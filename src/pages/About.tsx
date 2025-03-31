import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: "Angular", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 90 },
    { name: "React", level: 80 },
    { name: "C#", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Vue.js", level: 30 },
    { name: "Laravel", level: 15 },
  ];

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const handleSkillHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.classList.add('blur-motion-active');
    setTimeout(() => {
      target.classList.remove('blur-motion-active');
    }, 500);
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={skillVariants}
                onMouseEnter={handleSkillHover}
                className="bg-dark-lighter p-6 rounded-lg hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-medium">{skill.name}</h3>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-dark h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                  />
                </div>
              </motion.div>
            ))}
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