"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { newFeatures } from "../constants";
import { NewFeatures, TitleText, TypingText } from "../components";
import { planetVariants, staggerContainer, fadeIn } from "../utils/motion";

/**
 * WhatsNew Component
 *
 * This component renders a "What's New" section that includes:
 * - A heading with a typing animation
 * - A section title describing new features in Metaversus
 * - A list of new features dynamically displayed as cards
 * - A large animated image illustrating the concept
 * - Smooth animations for better user experience
 *
 * @component
 * @returns {JSX.Element} The animated "What's New" section
 */
const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    {/* Animated container for the entire section */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      {/* Left Side: New Features Description */}
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        {/* Section Heading with Typing Animation */}
        <TypingText title="| What's New?" />

        {/* Section Title */}
        <TitleText title={<>What's new about Metaversus?</>} />

        {/* List of New Features */}
        <div className="mt-[84px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      {/* Right Side: Animated Image */}
      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="whats-new.png"
          alt="whats-new"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
