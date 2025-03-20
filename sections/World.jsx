"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { staggerContainer, fadeIn } from "../utils/motion";
import CommunityCard from "../components/CommunityCard";

/**
 * World Component
 *
 * This component renders a "World" section that includes:
 * - A title with a typing animation
 * - A background world map with animated user locations
 * - Interactive community cards placed on the map
 * - Smooth animations for enhanced user experience
 *
 * @component
 * @returns {JSX.Element} The animated World section
 */
const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    {/* Animated container for the entire section */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      {/* Section Heading with Typing Animation */}
      <TypingText title="| People on the World" textStyle="text-center" />

      {/* Section Title */}
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyle="text-center"
      />

      {/* Map Container with Animated Elements */}
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px"
      >
        {/* Background World Map */}
        <img src="map.png" alt="map" className="w-full h-full object-cover" />

        {/* User Location Markers on the Map */}
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>

        {/* Community Cards for Different Locations */}
        <CommunityCard
          title="Hawkins Labs"
          image="planet-03.png"
          members={[
            "/people-02.png",
            "/people-01.png",
            "/people-03.png",
            "/people-04.png",
          ]}
          position="top-[50px] right-[19%]"
        />

        <CommunityCard
          title="The Upside Down"
          image="planet-02.png"
          members={[
            "/people-02.png",
            "/people-01.png",
            "/people-03.png",
            "/people-05.png",
          ]}
          position="top-72 left-[10%]"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default World;
