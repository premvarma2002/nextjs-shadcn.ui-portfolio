"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import TextType from "./TextType";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

// Components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
import { Float, Magnetic } from "./animations/Motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// offsets a layer by the smoothed mouse position, scaled by depth
const useLayer = (smx, smy, depth) => ({
  x: useTransform(smx, (v) => v * depth),
  y: useTransform(smy, (v) => v * depth),
});

const Hero = () => {
  const sectionRef = useRef(null);

  // scroll parallax: content drifts up and fades as the hero leaves
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // mouse parallax: each image layer moves by a different depth
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });
  const shapeLayer = useLayer(smx, smy, -25);
  const imgLayer = useLayer(smx, smy, 15);
  const badgeLayer = useLayer(smx, smy, 35);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    mx.set(e.clientX / innerWidth - 0.5);
    my.set(e.clientY / innerHeight - 0.5);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative isolate overflow-hidden py-12 xl:py-24 h-[84vh] xl:pt-28"
    >
      {/* parallax background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none"
      />
      {/* ambient glow blobs */}
      <motion.div
        style={{ x: shapeLayer.x, y: shapeLayer.y }}
        className="pointer-events-none absolute -z-10 top-20 -left-32 w-[420px] h-[420px] rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        style={{ x: badgeLayer.x, y: badgeLayer.y }}
        className="pointer-events-none absolute -z-10 bottom-0 right-0 w-[360px] h-[360px] rounded-full bg-primary/10 blur-3xl"
      />

      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <motion.div
            style={{ y: textY, opacity: fade }}
            variants={container}
            initial="hidden"
            animate="show"
            className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left"
          >
            <motion.div
              variants={item}
              className="text-lg uppercase font-semibold mb-4 text-primary tracking-[4px]"
            >
              <TextType
                text={[
                  "FRONTEND DEVELOPER",
                  "REACT JS DEVELOPER",
                  "NEXT JS DEVELOPER",
                ]}
                typingSpeed={60}
                pauseDuration={2200}
                showCursor={true}
              />
            </motion.div>

            <motion.h1 variants={item} className="h1 mb-4">
              Hello, my name is{" "}
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                Prem Varma
              </span>
            </motion.h1>

            <motion.p variants={item} className="subtitle max-w-[490] mx-auto xl:mx-0">
              Brief description with insights into myself, my vocational
              journey, and what I engage in professionally.
            </motion.p>

            {/* buttons */}
            <motion.div
              variants={item}
              className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12"
            >
              <Magnetic>
                <Link href={"/contact"}>
                  <Button className="gap-x-2">
                    Contact me <Send size={18} />
                  </Button>
                </Link>
              </Magnetic>

              <Magnetic>
                <a href="/cv.pdf" download="cv.pdf">
                  <Button variant="secondary" className="gap-x-2">
                    Download CV <Download size={18} />
                  </Button>
                </a>
              </Magnetic>
            </motion.div>

            <motion.div variants={item}>
              <Socials
                containerStyles="flex gap-x-6 m-auto xl:mx-0"
                iconsStyles="text-foreground text-[22px] hover:text-primary hover:-translate-y-1 transition-all"
              />
            </motion.div>
          </motion.div>

          {/* image  */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden xl:flex relative"
          >
            {/* badges float and sit on the nearest parallax layer */}
            <motion.div style={badgeLayer} className="absolute inset-0 z-10 pointer-events-none">
              <Float className="absolute top-[24%] -left-[5rem] pointer-events-auto" duration={5}>
                <Badge
                  icon={<RiBriefcase4Fill />}
                  endCountNum={2}
                  badgeText="Years Of Experience"
                />
              </Float>
              <Float className="absolute top-[80%] -left-[1rem] pointer-events-auto" duration={6} delay={0.8}>
                <Badge
                  icon={<RiTodoFill />}
                  endCountNum={18}
                  badgeText="Finished Projects"
                />
              </Float>
              <Float className="absolute top-[55%] -right-8 pointer-events-auto" duration={5.5} delay={1.6}>
                <Badge
                  icon={<RiTeamFill />}
                  endCountNum={23}
                  badgeText="Happy Clients"
                />
              </Float>
            </motion.div>

            <motion.div
              style={shapeLayer}
              className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"
            />
            <motion.div style={imgLayer}>
              <DevImg
                containerStyles="bg-hero_shape w-[530px] h-[460px] bg-no-repeat relative bg-bottom"
                imgSrc="/hero/dev1.png"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* scroll indicator */}
        <motion.div
          style={{ opacity: fade }}
          className="hidden md:flex absolute left-2/4 -translate-x-1/2 bottom-12 animate-bounce"
        >
          <RiArrowDownSLine className="text-3xl text-primary" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
