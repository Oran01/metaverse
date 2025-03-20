import styles from "../styles";

/**
 * StartSteps Component
 *
 * This component renders a step-by-step guide with:
 * - A numbered step inside a styled box
 * - A descriptive text alongside it
 *
 * @component
 * @param {Object} props - Component properties
 * @param {number} props.number - Step number (displayed with a leading zero)
 * @param {string} props.text - Description of the step
 * @returns {JSX.Element} The StartSteps component
 */
const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    {/* Step Number Container */}
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
    >
      {/* Display the step number with a leading zero */}
      <p className="font-bold text-[20px] text-white">0{number}</p>
    </div>

    {/* Step Description */}
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32px] ">
      {text}
    </p>
  </div>
);

export default StartSteps;
