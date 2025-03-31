import { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
  featured: boolean;
}

const Projects = () => {
  const categories = ['Todos', 'React', 'Angular', 'Laravel'];
  const [activeCategory, setActiveCategory] = useState('Todos');

  const projects: Project[] = [
    {
      id: 1,
      title: "uNotes",
      description: "Aplicativo web de anotações intuitivo e moderno desenvolvido como projeto final de graduação. Oferece funcionalidades de organização, categorização e compartilhamento de notas, com interface responsiva e amigável construída usando React, TypeScript e estilização moderna com Tailwind CSS e DaisyUI.",
      image: "/images/uNotes-print.png",
      tags: ["React", "TypeScript"],
      link: "",
      github: "https://github.com/S3verino/uNotes_app",
      featured: false
    },
    {
      id: 2,
      title: "Mia Sotel - Portifolio",
      description: "Portfolio profissional elegante e interativo desenvolvido para showcase de trabalhos criativos. Construído com React e Tailwind CSS, apresenta uma experiência de usuário fluida com animações suaves, design responsivo e seções organizadas para destacar projetos e habilidades.",
      image: "/images/miasotel-print.png",
      tags: ["React", "TypeScript"],
      link: "https://miasotel.com/",
      github: "https://github.com/PapaMarakuja/mia-website",
      featured: false
    },
    {
      id: 3,
      title: "Booreal - Site de apresentação",
      description: "Landing page corporativa moderna e dinâmica desenvolvida para a Booreal. Implementada com React, Tailwind CSS e Framer Motion, oferece uma experiência imersiva com animações fluidas, design responsivo e seções interativas que apresentam os serviços e valores da empresa de forma envolvente.",
      image: "/images/booreal-print.png",
      tags: ["React", "TypeScript"],
      link: "https://booreal-lab.web.app/",
      github: "https://github.com/PapaMarakuja/booreal",
      featured: true
    },
    {
      id: 4,
      title: "Frogs Sports",
      description: "Novidades em breve.",
      image: "",
      tags: ["React", "TypeScript", "Laravel"],
      link: "",
      github: "https://github.com/Sapo-Coders/sports_frog",
      featured: true
    },
    {
      id: 5,
      title: "Morada Portas",
      description: "Site de apresentação elegante e profissional desenvolvido para a Morada Portas, destacando sua linha premium de produtos e serviços. Construído com React, Tailwind CSS e Framer Motion, apresenta um design sofisticado com catálogo de produtos para ressaltar a qualidade e expertise da marca no mercado.",
      image: "",
      tags: ["React", "TypeScript"],
      link: "",
      github: "https://github.com/PapaMarakuja",
      featured: true
    },
  ];

  const filteredProjects = activeCategory === 'Todos'
    ? projects
    : projects.filter(project => project.tags.includes(activeCategory));

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Meus Projetos</h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Explore meus trabalhos recentes e veja como transformo ideias em realidade com código e criatividade.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md transition-all ${activeCategory === category
                ? 'bg-primary text-dark font-medium'
                : 'bg-dark-lighter text-gray-300 hover:bg-dark-light'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-dark-lighter p-10 rounded-lg border border-dark-light"
        >
          <h2 className="text-2xl font-bold mb-4">Tem um projeto em mente?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Estou sempre aberto a discutir novos projetos e ideias criativas. Vamos criar algo incrível juntos.
          </p>
          <motion.a
            href="/contact"
            className="inline-block px-6 py-3 bg-primary text-dark font-medium rounded-md hover:bg-primary-dark transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Entre em Contato
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-dark-lighter rounded-lg overflow-hidden project-card"
    >
      <div className="relative overflow-hidden h-48 group">
        {project.image ? (
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-500"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
            loading='lazy'
          />
        ) : (
          <motion.div
            className="w-full h-full flex items-center justify-center bg-gradient-to-br from-dark-light to-dark"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <span className="text-8xl font-bold text-primary/30">?</span>
            <span className="absolute text-sm text-white/60 mt-16">Em breve</span>
          </motion.div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>

        {project.featured && (
          <div className="absolute top-3 right-3 bg-primary text-dark text-xs px-2 py-1 rounded-md font-medium">
            Novo!
          </div>
        )}

        <div className="absolute inset-0 bg-dark-lighter/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
          <div className="flex gap-4">
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-dark"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fas fa-external-link-alt"></i>
              </motion.a>
            )}

            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-light flex items-center justify-center text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-github"></i>
              </motion.a>
            )}
          </div>
        </div>
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
      </div>
    </motion.div>
  );
};

export default Projects;