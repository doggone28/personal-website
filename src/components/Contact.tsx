import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socials = [
    { name: "Instagram", href: "https://www.instagram.com/jinu.28" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/brandonjinuson/" },
    { name: "GitHub", href: "https://github.com/doggone28" },

  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 30, repeat: Infinity }}
      />

      <div className="container relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-medium leading-tight">
              Let's create
              <br />
              <span className="italic text-muted-foreground">something beautiful</span>
            </h2>
          </motion.div>

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="mailto:bjinuson@gmail.com"
              className="group inline-flex items-center gap-4 text-2xl sm:text-3xl lg:text-4xl font-display hover-line"
            >
              bjinuson@gmail.com
              <svg
                className="w-8 h-8 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-px bg-border mx-auto max-w-md"
          />

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wide hover-line"
              >
                {social.name}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
