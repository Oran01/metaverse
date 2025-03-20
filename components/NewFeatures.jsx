import styles from "../styles";

/**
 * NewFeatures Component
 *
 * This component renders a feature card that:
 * - Displays an icon inside a circular background
 * - Shows a title with a bold font
 * - Includes a subtitle with descriptive text
 *
 * @component
 * @param {Object} props - Component properties
 * @param {string} props.imgUrl - URL of the feature icon
 * @param {string} props.title - Title of the feature
 * @param {string} props.subtitle - Description or subtitle of the feature
 * @returns {JSX.Element} The NewFeatures component
 */
const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    {/* Icon Container with Background */}
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
    >
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>

    {/* Feature Title */}
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">
      Title {title}{" "}
    </h1>

    {/* Feature Description */}
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
