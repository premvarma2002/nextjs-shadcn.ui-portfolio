"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";

const directions = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 60 },
  right: { x: -60 },
  none: {},
};

// fades + slides children in once when they scroll into view
export const Reveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  as = "div",
}) => {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
};

// parent that reveals its <StaggerItem> children one after another
export const Stagger = ({ children, className = "", stagger = 0.15, delay = 0 }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: stagger, delayChildren: delay } },
    }}
  >
    {children}
  </motion.div>
);

export const staggerItem = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const StaggerItem = ({ children, className = "" }) => (
  <motion.div className={className} variants={staggerItem}>
    {children}
  </motion.div>
);

// moves children vertically as the element passes through the viewport
// speed > 0 moves slower than scroll (classic parallax), < 0 moves faster
export const Parallax = ({ children, speed = 0.2, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const range = speed * 200;
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [range, -range]), {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

// 3D tilt that follows the cursor
export const Tilt = ({ children, className = "", max = 10 }) => {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springCfg = { stiffness: 200, damping: 20 };
  const rotateX = useSpring(useTransform(y, [0, 1], [max, -max]), springCfg);
  const rotateY = useSpring(useTransform(x, [0, 1], [-max, max]), springCfg);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };
  const reset = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
};

// gently pulls children toward the cursor while hovered
export const Magnetic = ({ children, strength = 0.3, className = "" }) => {
  const x = useSpring(0, { stiffness: 250, damping: 15 });
  const y = useSpring(0, { stiffness: 250, damping: 15 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={`inline-block ${className}`}
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
};

// slow floating loop, used for badges and decorative shapes
export const Float = ({ children, className = "", amplitude = 12, duration = 5, delay = 0 }) => (
  <motion.div
    className={className}
    animate={{ y: [0, -amplitude, 0] }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);
