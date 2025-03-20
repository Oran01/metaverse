/**
 * Head Component
 *
 * This component sets up the essential metadata for the HTML document.
 * - Defines the page title.
 * - Sets up the viewport for responsive design.
 * - Includes a favicon for branding.
 *
 * @component
 * @returns {JSX.Element} The metadata elements for the document head.
 */
const Head = () => (
  <>
    {/* Sets the page title */}
    <title>Metaversus</title>

    {/* Configures the viewport for responsive design */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    {/* Links the favicon for browser tab branding */}
    <link rel="icon" href="/favicon.ico" />
  </>
);

export default Head;
