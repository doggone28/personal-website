import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import baltimore from "@/assets/baltimore.jpg"
import bigchair from "@/assets/bigchair.jpg"
import wedlocked from "@/assets/wedlocked.jpeg"

const projects = [
  {
    id: 1,
    title: "The Balitmore Waltz",
    category: "Cabaret Theatre - CARL",
    year: "2024",
    image: baltimore,
    size: "large",
  },
  {
    id: 2,
    title: "Wedlocked",
    category: "College Avenue Players - MARSHALL",
    year: "2024",
    image: wedlocked,
    size: "small",
  },
  {
    id: 3,
    title: "The Great Big Chair in the Sky",
    category: "Cabaret Theatre - DEPUTY #2",
    year: "2025",
    image: bigchair,
    size: "medium",
  },
];

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-32 relative">
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16"
        >
          <div className="space-y-4">
            <span className="text-primary text-sm tracking-[0.3em] uppercase">
              Performances
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium">
              Theatrical Performances
            </h2>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View All Projects
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
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
    </section>
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
  const gridClasses = {
    0: "lg:col-span-8",
    1: "lg:col-span-4",
    2: "lg:col-span-12",
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
      className={`group cursor-pointer ${gridClasses[index as keyof typeof gridClasses]}`}
    >
      <div className="relative overflow-hidden bg-card">
        {/* Image */}
        <div className={`relative ${index === 2 ? "aspect-[21/9]" : "aspect-[4/3]"} overflow-hidden`}>
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Hover content */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <motion.div
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1 }}
              className="w-16 h-16 rounded-full border border-foreground flex items-center justify-center"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Info */}
        <div className="p-6 flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="font-display text-xl font-medium group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground">{project.category}</p>
          </div>
          <span className="text-sm text-muted-foreground">{project.year}</span>
        </div>
      </div>
    </motion.article>
  );
};

export default Work;
