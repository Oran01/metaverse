"use client";

import { motion } from "framer-motion";
import { TypingText, StartSteps, TitleText } from "../components";
import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { startingFeatures } from "../constants";

/**
 * GetStarted Component
 *
 * This component renders a "Get Started" section that includes:
 * - A large animated image representing Metaverse
 * - A title and subtitle describing how to start
 * - A step-by-step guide using animated steps
 *
 * @component
 * @returns {JSX.Element} The animated Get Started section
 */
const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    {/* Animated Container with Staggered Effects */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      {/* Left Side: Animated Metaverse Image */}
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>

      {/* Right Side: Steps and Text Content */}
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        {/* Section Title with Typing Animation */}
        <TypingText title="| How Metaverse Works" />
        <TitleText title={<>Get started with just a few clicks</>} />

        {/* Step-by-Step Guide */}
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps key={feature} number={index + 1} text={feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
