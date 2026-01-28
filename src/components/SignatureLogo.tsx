import { motion } from "framer-motion";

const SignatureLogo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none select-none"
    >
      <svg
        viewBox="0 0 400 150"
        className="w-[280px] sm:w-[350px] lg:w-[420px] h-auto opacity-[0.08]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M40 100 C60 40, 80 30, 90 50 C100 70, 85 90, 70 95 C55 100, 50 80, 60 60 C70 40, 90 35, 110 50 C130 65, 120 90, 100 100"
          stroke="hsl(var(--primary))"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
        />
        <motion.path
          d="M100 100 C115 95, 130 80, 145 75 C160 70, 170 85, 160 95 C150 105, 130 100, 140 85 C150 70, 175 65, 190 80"
          stroke="hsl(var(--primary))"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.8, ease: "easeInOut" }}
        />
        <motion.path
          d="M180 80 C190 50, 210 45, 220 60 C230 75, 215 95, 200 90"
          stroke="hsl(var(--primary))"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 2.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M215 55 C240 50, 280 55, 300 70 C320 85, 310 105, 285 100 C260 95, 250 75, 270 65 C290 55, 320 60, 340 75 C360 90, 355 110, 330 105"
          stroke="hsl(var(--primary))"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 3, ease: "easeInOut" }}
        />
        {/* Decorative underline flourish */}
        <motion.path
          d="M50 115 C100 120, 200 125, 350 110"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, delay: 4.5, ease: "easeOut" }}
        />
      </svg>
    </motion.div>
  );
};

export default SignatureLogo;
