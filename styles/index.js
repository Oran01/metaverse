/**
 * Global Styles Configuration
 *
 * This file contains reusable Tailwind CSS class utilities
 * to ensure consistent styling across the project.
 *
 * These classes are used for layout management, spacing,
 * typography, and flexbox utilities.
 */

const styles = {
  /**
   * Layout Widths
   * - `innerWidth`: Sets a max width of 1280px for larger screens while making it full width for smaller screens.
   * - `interWidth`: Defines a width of 80% for large screens and 100% for small screens.
   */
  innerWidth: "2xl:max-w-[1280px] w-full",
  interWidth: "lg:w-[80%] w-[100%]",

  /**
   * Padding Utilities
   * - `paddings`: Applies consistent padding for all screen sizes.
   * - `yPaddings`: Controls vertical padding.
   * - `xPaddings`: Controls horizontal padding.
   * - `topPaddings`: Controls padding on the top.
   * - `bottomPaddings`: Controls padding on the bottom.
   */
  paddings: "sm:p-16 xs:p-8 px-6 py-12",
  yPaddings: "sm:py-16 xs:py-8 py-12",
  xPaddings: "sm:px-16 px-6",
  topPaddings: "sm:pt-16 xs:pt-8 pt-12",
  bottomPaddings: "sm:pb-16 xs:pb-8 pb-12",

  /**
   * Flexbox Utilities
   * - `flexCenter`: Centers elements both horizontally and vertically.
   * - `flexStart`: Aligns items to the start position.
   * - `flexEnd`: Aligns items to the end position.
   * - `navPadding`: Adds top padding for navigation spacing.
   */
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-start items-start",
  flexEnd: "flex justify-end",
  navPadding: "pt-[98px]",

  /**
   * Hero Section Styles
   * - `heroHeading`: Controls the typography for large hero section headings with responsive font sizes.
   * - `heroDText`: Defines a bordered and rounded-right shape for decorative text in the hero section.
   */
  heroHeading:
    "font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white",
  heroDText:
    "md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]",
};

export default styles;
