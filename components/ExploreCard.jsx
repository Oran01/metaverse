"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from "../utils/motion";

/**
 * ExploreCard Component
 *
 * This component represents a dynamically sized card that:
 * - Displays an image background
 * - Expands when active
 * - Shows title and interactive content on hover/click
 *
 * @component
 * @param {Object} props - Component properties
 * @param {string} props.id - Unique identifier for the card
 * @param {string} props.imgUrl - Background image URL
 * @param {string} props.title - Title of the card
 * @param {number} props.index - Index position of the card
 * @param {string} props.active - ID of the currently active card
 * @param {Function} props.handleClick - Callback function when card is clicked
 * @returns {JSX.Element} Animated Explore Card component
 */
const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    // Applying fade-in animation when the component enters the viewport
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    {/* Background Image */}
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />

    {/* Title (Shown only when inactive) */}
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      // Expanded Card Content (When Active)
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] ">
        {/* Circular Icon (Glassmorphism Effect) */}
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>

        {/* Subtitle */}
        <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
          Enter the Metaverse
        </p>

        {/* Main Title */}
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
