import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github } from "lucide-react";


const workExperiences = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    period: "2023 - Present",
    description: "Leading development of scalable web applications and mentoring junior developers.",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    period: "2021 - 2023",
    description: "Built and maintained multiple client-facing applications using React and Node.js.",
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Creative Agency",
    period: "2019 - 2021",
    description: "Developed responsive web interfaces and collaborated with design teams.",
  },
];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full Stack",
    year: "2024",
    description: "A modern shopping experience with real-time inventory management.",
    github: "https://github.com/yourname/ecommerce",
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Web Application",
    year: "2024",
    description: "Collaborative project management tool with team features.",
    github: "https://github.com/yourname/task-manager",
  },
  {
    id: 3,
    title: "Portfolio CMS",
    category: "Content Management",
    year: "2023",
    description: "Custom CMS for creative professionals to showcase their work.",
    github: "https://github.com/yourname/portfolio-cms",
  },
];


const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    
     <section id="work" ref={ref} className="py-24 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
            Experience & Work
          </h2>
          <h3 className="text-5xl font-light mb-8">
            Professional Journey
          </h3>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Work Experience Section */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl font-light mb-8 pb-4 border-b border-gray-200"
            >
              Work Experience
            </motion.h4>
            <div className="space-y-8">
              {workExperiences.map((experience, index) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl font-light mb-8 pb-4 border-b border-gray-200"
            >
              Featured Projects
            </motion.h4>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({
  experience,
  index,
  isInView,
}: {
  experience: typeof workExperiences[0];
  index: number;
  isInView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      className="group"
    >
      <div className="relative overflow-hidden">
        {/* Content */}
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h5 className="text-xl font-medium group-hover:text-gray-600 transition-colors">
              {experience.title}
            </h5>
            <span className="text-sm text-gray-500 whitespace-nowrap">
              {experience.period}
            </span>
          </div>
          <p className="text-base font-light text-gray-700">
            {experience.company}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {experience.description}
          </p>
        </div>

        {/* Hover effect line */}
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-gray-900"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

const ProjectCard = ({
  project,
  index,
  isInView,
}: {
  project: typeof projects[0];
  index: number;
  isInView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      className="group"
    >
      <div className="relative overflow-hidden">
        {/* Content */}
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h5 className="text-xl font-medium group-hover:text-gray-600 transition-colors">
              {project.title}
            </h5>
            {project.github && (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-gray-900 transition-colors"
  >
    <Github size={16} />
  </a>
)}
            <span className="text-sm text-gray-500 whitespace-nowrap">
              {project.year}
            </span>
          </div>
          <p className="text-base font-light text-gray-700">
            {project.category}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {project.description}
          </p>

        



        </div>


    
        {/* Hover effect line */}
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-gray-900"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default Work;