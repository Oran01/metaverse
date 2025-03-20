/**
 * Component Exports
 *
 * This file serves as a centralized export for all UI components,
 * making it easier to import them into other files.
 *
 * Using this approach, components can be imported from the `components`
 * directory in a cleaner and more manageable way.
 */

import Navbar from "./Navbar"; // Navigation bar for the application
import { TypingText, TitleText } from "./CustomTexts"; // Custom text animations
import ExploreCard from "./ExploreCard"; // Interactive card for exploring Metaverse worlds
import StartSteps from "./StartSteps"; // Step-by-step guide component
import NewFeatures from "./NewFeatures"; // Highlights new Metaverse features
import InsightCard from "./InsightCard"; // Displays an insight or news update
import Footer from "./Footer"; // Footer section with social links and branding

// Export all components for easier import across the project
export {
  Navbar,
  TitleText,
  TypingText,
  StartSteps,
  NewFeatures,
  ExploreCard,
  InsightCard,
  Footer,
};
