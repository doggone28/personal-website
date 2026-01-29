import { motion } from "framer-motion";
import heroPortrait from "@/assets/photoforwebsite.png";
import SignatureLogo from "./SignatureLogo";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Signature watermark */}
      <SignatureLogo />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      
      {/* Floating accent elements */}
      <motion.div
        className="absolute top-20 right-[20%] w-32 h-32 rounded-full bg-primary/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 left-[10%] w-48 h-48 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20">
        {/* Left content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="text-muted-foreground text-sm tracking-[0.3em] uppercase">
              Fullstack Software Engineer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[0.95] tracking-tight"
          >
            Jinu
            <br />
            <span className="text-gradient">Son</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground text-lg max-w-md leading-relaxed"
          >
            Early career software engineer aspiring to make a difference through tech. 
            Increase your sacrifice or lower your desire.
            
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-6 pt-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-wide transition-all hover:gap-5"
            >
              View Work
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border px-8 py-4 text-sm font-medium tracking-wide transition-colors hover:border-primary hover:text-primary"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          <div className="relative aspect-[3/4] max-w-lg mx-auto lg:ml-auto">
            {/* Image frame */}
            <div className="absolute inset-0 border border-primary/20 -translate-x-4 -translate-y-4" />
            
            {/* Main image */}
            <div className="relative overflow-hidden bg-card">
              <img
                src={heroPortrait}
                alt="Jinu Son"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>

            {/* Decorative accent */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-24 h-24 border border-primary/40"
              animate={{ rotate: [0, 90, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
