import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github } from "lucide-react";


const workExperiences = [
  {
    id: 1,
    title: "Web Designer",
    company: "Cabaret Theatre",
    period: "Jun. 2025 - Present",
    description: "Developed and updated promotional content in collaboration with board members",
  },
  {
    id: 2,
    title: "Computer Science & Mathematics Lead Mentor Learning Assistant",
    company: "Rutgers Learning Centres",
    period: "Dec. 2023 - Present",
    description: "Leads 3 sections of Probability, Calculus, and Intro to CS courses to instruct 60+ students per semester",
  },
  {
    id: 3,
    title: "Research Assistant",
    company: "Rutgers Biomedical & Health Sciences / New Jersey Medical School",
    period: "Jun. 2024 - Jun. 2025",
    description: "Presented Cancer Incidence and Mortality in a Cohort of Opioid Use Disorder Subjects at the Aresty Research Symposium, presenting to around 400 people",
  },
  {
    id: 4,
    title: "VR/AR Cybersecurity & Data Protection Intern",
    company: "Wireless Network Laboratory",
    period: "Jun. 2024 - Jun. 2025",
    description: "Investigated biometric privacy risks in VR devices by analyzing gyroscope and accelerometer data through Android Studio & C, contributing to privacy-preserving interaction methods",
  }
];

const projects = [
  {
    id: 1,
    title: "Multiplayer Rock Paper Scissors Server",
    category: "C, POSIX Sockets, Threads, Polling",
    year: "2024",
    description: "Designed a client-server architecture using pthread and poll for match handshake logic, player validation, and rematches",
    github: "https://github.com/doggone28/rockpaperscissors",
  },
  {
    id: 2,
    title: "Custom Unix-Like Shell",
    category: "C, Unix Systems Programming, Process Management",
    year: "2024",
    description: "Built a C-based shell supporting interactive and batch modes with pipelines, redirection, and built-in commands",
    github: "https://github.com/doggone28/Custom-Shell-Implementation---CS214",
  },
  {
    id: 3,
    title: "Reliable Data Transfer over UDP",
    category: "Python, UDP/TCP, Sockets, Cumulative ACKs",
    year: "2025",
    description: "Built a UDP-style reliable transport protocol implementing pipelined sliding windows, loss recovery via timeouts and duplicate ACKs, and configurable networking loss models to study throughput and correctness under unreliable conditions",
    github: "https://github.com/doggone28/Reliable-UDP-Data-Transfer",
  },

   {
    id: 4,
    title: "Personal Website",
    category: "TypeScript, CSS, HTML5, JavaScript",
    year: "2025",
    description: "You're looking at it!",
    github: "https://github.com/doggone28/personal-website",
  }
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