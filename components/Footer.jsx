"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";
import styles from "../styles";
import { footerVariants } from "../utils/motion";

/**
 * Footer Component
 *
 * This component renders the footer of the webpage, including:
 * - A title with a CTA (Call-To-Action) button
 * - A divider line for separation
 * - Copyright information
 * - Social media icons with links
 *
 * @component
 * @returns {JSX.Element} The animated Footer component
 */
const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    {/* Background gradient for styling */}
    <div className="footer-gradient" />

    {/* Footer Content Container */}
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-6`}>
      {/* Top Section - Heading & CTA Button */}
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Enter the Metaversus
        </h4>

        {/* CTA Button */}
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
        >
          {/* Headset Icon */}
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          {/* Button Text */}
          <span className="font-normal text-[16px] text-white">
            ENTER METAVERSUS
          </span>
        </button>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col">
        {/* Divider Line */}
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        {/* Footer Information Row */}
        <div className="flex items-center justify-between flex-wrap gap-4 ">
          {/* Branding Name */}
          <h4 className="font-extrabold text-[24px] text-white">Metaversus</h4>

          {/* Copyright Notice */}
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
