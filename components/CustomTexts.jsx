"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

/**
 * TypingText Component
 *
 * Renders animated text that appears as if it's being typed.
 * Each letter is animated separately using Framer Motion.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {string} props.title - The text content to be animated
 * @param {string} [props.textStyle] - Additional CSS classes for styling
 * @returns {JSX.Element} Animated paragraph element with typing effect
 */
export const TypingText = ({ title, textStyle }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyle}`}
  >
    {/* Convert text into an array of characters and animate each letter */}
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {/* Preserve spaces using Unicode non-breaking space */}
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

/**
 * TitleText Component
 *
 * Displays a large animated title using Framer Motion.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {string} props.title - The title text to be displayed
 * @param {string} [props.textStyle] - Additional CSS classes for styling
 * @returns {JSX.Element} Animated heading element
 */
export const TitleText = ({ title, textStyle }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyle}`}
  >
    {title}
  </motion.h2>
);
