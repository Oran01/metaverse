import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";

/**
 * Page Component
 *
 * This component serves as the main page layout, rendering multiple sections:
 * - Navbar: The top navigation bar.
 * - Hero: The main hero section with an introduction.
 * - About: Provides information about the Metaverse.
 * - Explore: Allows users to explore virtual worlds.
 * - GetStarted: A guide on how to get started with Metaverse.
 * - WhatsNew: Highlights new features.
 * - World: Displays an interactive world map.
 * - Insights: Shows Metaverse insights and updates.
 * - Feedback: User testimonials and feedback.
 * - Footer: Contains social links and branding information.
 *
 * Additionally, it includes gradient background effects for a modern look.
 *
 * @component
 * @returns {JSX.Element} The main page layout with all sections.
 */
const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    {/* Navbar Section */}
    <Navbar />

    {/* Hero Section */}
    <Hero />

    {/* About & Explore Section with Gradient Background */}
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" /> {/* Background gradient effect */}
      <Explore />
    </div>

    {/* GetStarted & WhatsNew Section with Gradient Background */}
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" /> {/* Background gradient effect */}
      <WhatsNew />
    </div>

    {/* World Section */}
    <World />

    {/* Insights & Feedback Section with Gradient Background */}
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" /> {/* Background gradient effect */}
      <Feedback />
    </div>

    {/* Footer Section */}
    <Footer />
  </div>
);

export default Page;
