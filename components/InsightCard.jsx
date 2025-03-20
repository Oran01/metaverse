"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

/**
 * InsightCard Component
 *
 * This component renders an insight card that:
 * - Displays an image
 * - Shows a title and subtitle with responsive styling
 * - Includes an arrow button for interaction (visible on large screens)
 * - Animates when entering the viewport using Framer Motion
 *
 * @component
 * @param {Object} props - Component properties
 * @param {string} props.imgUrl - URL of the background image
 * @param {string} props.title - Title text of the insight card
 * @param {string} props.subtitle - Subtitle text providing additional details
 * @param {number} props.index - Index of the card, used for animation delay
 * @returns {JSX.Element} The animated InsightCard component
 */

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    {/* Insight Image */}
    <img
      src={imgUrl}
      alt="planet-01"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />

    {/* Content Section */}
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        {/* Insight Title */}
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        {/* Insight Subtitle */}
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>

      {/* Interactive Arrow Button (Only visible on large screens) */}
      <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
        <img
          src="arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
