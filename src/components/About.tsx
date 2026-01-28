import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "3.7", label: "GPA" },
    { number: "3", label: "Years of Experience" },
    { number: "4", label: "Projects Completed" },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-card/50" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-primary text-sm tracking-[0.3em] uppercase">
                About Me
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight">
                Computer Science & Mathematics B.S Double Major
                <br />
                <span className="text-muted-foreground">Minor in Quantiative Economics</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Studying at Rutgers University in New Brunswick, New Jersey.
              </p>
              <p>
                I believe in the transformative power of technology and using computing to make the world a better place.
              </p>
            </div>

            <div className="flex gap-8 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="space-y-1"
                >
                  <div className="text-3xl sm:text-4xl font-display font-semibold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="font-display text-2xl font-medium">Core Expertise</h3>
            
            <div className="space-y-6">
              {[
                { skill: "Java, Python, Apache Kafka" },
                { skill: "Frontend UI/UX Design"},
                { skill: "C/C++ Low Level Design"},
                { skill: "MySQL, PostgreSQL, Database Management" },
              ].map((item, index) => (
                <motion.div
                  key={item.skill}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex justify-between text-sm">
                    <span>{item.skill}</span>
                   
                  </div>
                  <div className="h-[2px] bg-border overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                 
                      transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                      className="h-full bg-primary"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Implanted, impatient, impossible, in memory, mirror, and membrane 
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
