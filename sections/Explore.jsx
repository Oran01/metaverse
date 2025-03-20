"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TypingText, ExploreCard, TitleText } from "../components";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { exploreWorlds } from "../constants";

/**
 * Explore Component
 *
 * This component renders an interactive section where users can:
 * - Choose a virtual world to explore
 * - See smooth animations using Framer Motion
 * - Click on cards to set them as active and change their size dynamically
 *
 * @component
 * @returns {JSX.Element} The animated Explore section
 */
const Explore = () => {
  // State to track the currently active world
  const [active, setActive] = useState("world-2");

  return (
    <section className={`${styles.paddings}`} id="explore">
      {/* Motion container with staggered animation effect */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        {/* Section Heading with Typing Animation */}
        <TypingText title="| The World" textStyle="text-center" />

        {/* Section Title */}
        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" /> to
              explore{" "}
            </>
          }
          textStyle="text-center"
        />

        {/* World Selection Cards */}
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
