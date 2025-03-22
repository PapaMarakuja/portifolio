import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-lighter opacity-90"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-dark to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Olá, eu sou <span className="gradient-text">Rafael Pereira</span>
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Desenvolvedor Fullstack apaixonado por soluções criativas
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link to="/projects">
                <motion.button
                  className="px-6 py-3 bg-primary text-dark font-medium rounded-md hover:bg-primary-dark transition-colors"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sobre mim
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  className="px-6 py-3 bg-dark-light text-white font-medium rounded-md hover:bg-dark-lighter border border-primary transition-colors"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Entre em contato
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section ref={ref} className="py-20 bg-dark-lighter">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Minhas Habilidades</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Com 5 anos de experiência, desenvolvi expertise em várias tecnologias
              focando na criação de aplicações web responsivas e interativas.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos em Destaque</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Aqui estão alguns dos meus projetos recentes que demonstram minhas habilidades e expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <motion.button
                className="px-6 py-3 bg-dark-light text-white font-medium rounded-md hover:bg-dark-lighter border border-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Todos os Projetos
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Skill Card Component
const SkillCard = ({ skill, index }: { skill: { name: string; icon: string; level: number }; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-dark p-6 rounded-lg hover:border-primary border border-dark-light transition-all"
      whileHover={{
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div className="text-primary text-3xl mb-4">
        <i className={skill.icon}></i>
      </div>
      <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
      <div className="w-full bg-dark-light rounded-full h-2">
        <motion.div
          className="bg-primary h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

// Project Card Component
const ProjectCard = ({ project, index }: {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string
  };
  index: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-dark-lighter rounded-lg overflow-hidden"
      whileHover={{
        y: -10,
        transition: { duration: 0.2 }
      }}
    >
      <div className="relative overflow-hidden h-48">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{
            scale: 1.1,
            filter: "blur(4px)",
            transition: { duration: 0.3 }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs bg-dark px-2 py-1 rounded text-primary">
              {tag}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-light flex items-center"
          >
            Visualizar Projeto <i className="fas fa-arrow-right ml-2"></i>
          </a>
        )}
      </div>
    </motion.div>
  );
};

// Sample data
const skills = [
  { name: "Angular", icon: "fab fa-angular", level: 95 },
  { name: "TypeScript", icon: "fab fa-js", level: 90 },
  { name: "Tailwind CSS", icon: "fab fa-css3", level: 90 },
  { name: "React", icon: "fab fa-react", level: 80 },
  { name: "C#", icon: "fab fa-csharp", level: 80 },
  { name: "Node.js", icon: "fab fa-node-js", level: 75 },
  { name: "Vue.js", icon: "fab fa-vuejs", level: 30 },
  { name: "Laravel", icon: "fab fa-laravel", level: 15 },
];

const featuredProjects = [
  {
    title: "uNotes",
    description: "Projeto de anotações desenvolvido com React, TypeScript, Tailwind CSS e DaisyUI. Desenvolvido durante a faculdade como projeto final.",
    image: "/images/project1.jpg",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: ""
  },
  {
    title: "Mia Sotel - Portifolio",
    description: "Portifólio desenvolvido com React e Tailwind CSS para apresentação pessoal.",
    image: "/images/project2.jpg",
    tags: ["React.js", "TypeScript", "Tailwind CSS"],
    link: "https://miasotel.com/"
  },
  {
    title: "Booreal - Site de apresentação",
    description: "Site desenvolvido com React, Tailwind CSS e Framer Motion para apresentação de uma empresa.",
    image: "/images/project3.jpg",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://booreal-lab.web.app/"
  }
];

export default Home;