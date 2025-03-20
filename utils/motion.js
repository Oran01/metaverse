/**
 * Motion Variants for Animations
 *
 * This file defines reusable Framer Motion animation variants.
 * These variants provide consistent animations throughout the application.
 */

/**
 * Navigation Bar Animation Variants
 *
 * Controls the animation for the navigation bar:
 * - Hidden: Fades out and moves up.
 * - Show: Fades in and moves down smoothly with a spring effect.
 */
export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 1,
    },
  },
};

/**
 * Slide-In Animation Variant
 *
 * Creates a sliding effect from any direction.
 *
 * @param {"left"|"right"|"up"|"down"} direction - Direction of the slide.
 * @param {string} type - Type of transition (e.g., "spring" or "tween").
 * @param {number} delay - Delay before the animation starts.
 * @param {number} duration - Duration of the animation.
 */
export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

/**
 * Staggered Animation Container
 *
 * Delays the appearance of child elements within a container.
 *
 * @param {number} staggerChildren - Time between each child's animation.
 * @param {number} delayChildren - Delay before children animations start.
 */
export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/**
 * Text Animation Variant
 *
 * Creates a smooth fade-in effect for text with a slight movement.
 *
 * @param {number} delay - Delay before animation starts.
 */
export const textVariant = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

/**
 * Text Container Animation
 *
 * Controls how text elements are revealed sequentially.
 */
export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

/**
 * Secondary Text Animation Variant
 *
 * A smoother, simpler fade-in effect for secondary text.
 */
export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};

/**
 * Fade-In Animation Variant
 *
 * Creates a fade-in effect with a directional slide.
 *
 * @param {"left"|"right"|"up"|"down"} direction - Direction of the fade-in effect.
 * @param {string} type - Type of transition.
 * @param {number} delay - Delay before animation starts.
 * @param {number} duration - Duration of the animation.
 */
export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

/**
 * Planet Movement Animation
 *
 * Creates a rotating and sliding effect for planet images.
 *
 * @param {"left"|"right"} direction - Direction the planet moves from.
 */
export const planetVariants = (direction) => ({
  hidden: {
    x: direction === "left" ? "-100%" : "100%",
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      duration: 1.8,
      delay: 0.5,
    },
  },
});

/**
 * Zoom-In Animation Variant
 *
 * Creates a scaling effect that enlarges elements smoothly.
 *
 * @param {number} delay - Delay before animation starts.
 * @param {number} duration - Duration of the animation.
 */
export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

/**
 * Footer Animation Variant
 *
 * Creates a smooth fade-in effect for the footer section.
 */
export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.5,
    },
  },
};
