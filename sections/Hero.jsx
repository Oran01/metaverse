"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

/**
 * Hero Component
 *
 * This component renders the main hero section of the webpage, including:
 * - Animated headings with dynamic styling
 * - A background image with an overlay gradient effect
 * - A call-to-action (CTA) button with a link to explore more
 * - Smooth animations using Framer Motion
 *
 * @component
 * @returns {JSX.Element} The animated Hero section
 */
const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    {/* Container for animations and layout */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      {/* Hero Title Section */}
      <div className="flex justify-center items-center flex-col relative z-10">
        {/* First Line of Text */}
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Metaverse
        </motion.h1>

        {/* Second Line with Split Text & Decorative Element */}
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
      </div>

      {/* Hero Image Section */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        {/* Background Gradient Overlay */}
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

        {/* Cover Image */}
        <img
          src="cover.png"
          alt="cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

        {/* Call-to-Action (CTA) Stamp Icon */}
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
