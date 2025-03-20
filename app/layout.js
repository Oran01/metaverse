import "../styles/globals.css";

/**
 * RootLayout Component
 *
 * This component defines the root layout structure for the entire application.
 * - Wraps the entire app inside an `<html>` and `<body>` tag.
 * - Sets the page language to English (`lang="en"`).
 * - Includes global styles from `globals.css`.
 * - Preconnects and loads an external font for better performance.
 *
 * @component
 * @param {Object} props - The component properties.
 * @param {React.ReactNode} props.children - The child components that will be rendered inside the layout.
 * @returns {JSX.Element} The root layout structure.
 */
const RootLayout = ({ children }) => (
  <html lang="en">
    {" "}
    {/* Defines the language for accessibility & SEO */}
    <head>
      {/* Preconnect to the font provider to improve loading speed */}
      <link rel="preconnect" href="https://stijndv.com" />

      {/* Load custom Eudoxus Sans font for styling */}
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </head>
    <body>{children}</body>
    {/* Main application content */}
  </html>
);

export default RootLayout;
