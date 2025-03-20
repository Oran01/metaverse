"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { InsightCard, TitleText, TypingText } from "../components";
import { staggerContainer } from "../utils/motion";
import { insights } from "../constants";

/**
 * Insights Component
 *
 * This component renders an "Insights" section that includes:
 * - A heading with a typing animation
 * - A section title describing metaverse insights
 * - A list of animated insight cards mapped from `insights` array
 * - Smooth animations for better user experience
 *
 * @component
 * @returns {JSX.Element} The animated Insights section
 */
const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    {/* Animated container for the entire section */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      {/* Animated Heading */}
      <TypingText title="| Insight" textStyle="text-center" />

      {/* Section Title */}
      <TitleText title="Insight about metaverse" textStyle="text-center" />

      {/* List of Insight Cards */}
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard
            key={`insight-${index}`}
            {...insight}
            index={index + 1}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
