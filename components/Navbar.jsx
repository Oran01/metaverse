"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";

/**
 * Navbar Component
 *
 * This component renders the navigation bar, which includes:
 * - A search icon on the left
 * - A centered brand title ("METAVERSUS")
 * - A menu icon on the right
 * - A background gradient effect
 * - Animated appearance using Framer Motion
 *
 * @component
 * @returns {JSX.Element} The animated Navbar component
 */
const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    {/* Background gradient effect covering half of the navbar */}
    <div className="absolute w-[50%] inset-0 gradient-01" />

    {/* Navbar Content Container */}
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      {/* Search Icon (Left Side) */}
      <img
        src="search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />

      {/* Brand Title (Centered) */}
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        METAVERSUS
      </h2>

      {/* Menu Icon (Right Side) */}
      <img
        src="menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
