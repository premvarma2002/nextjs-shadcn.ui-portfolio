'use client'

import { motion, MotionConfig, useScroll, useSpring } from 'framer-motion'
// variants
const variants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 }
}

const Template = ({ children }) => {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
    return (
        // reducedMotion="user" turns off transform animations for visitors who prefer reduced motion
        <MotionConfig reducedMotion='user'>
            <motion.main
                variants={variants}
                initial='hidden'
                animate='enter'
                transition={{ ease: [0.22, 1, 0.36, 1], delay: 0.2, duration: 0.6 }}
            >
                {children}
            </motion.main>
            {/* {completion bar} */}
            <motion.span style={{ scaleY }} className='fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 origin-top'></motion.span>
        </MotionConfig>
    )
}

export default Template
