import React from "react";

/**
 * CommunityCard Component
 *
 * This component renders a community card that displays:
 * - A background image
 * - A semi-transparent frame behind the card
 * - A dark overlay for better text contrast
 * - Avatars of recently joined members
 * - A title of the community
 *
 * @component
 * @param {Object} props - Component properties
 * @param {string} props.title - The name of the community
 * @param {Array<string>} props.members - Array of member avatar image URLs
 * @param {string} props.image - Background image URL for the community
 * @param {string} props.position - Tailwind CSS class for positioning
 * @returns {JSX.Element} Rendered CommunityCard component
 */
const CommunityCard = ({ title, members, image, position }) => {
  return (
    <div
      className={`absolute ${position} w-[220px] h-[160px] invisible md:visible`}
    >
      {/* Semi-Transparent Frame Behind the Card */}
      <div className="absolute -inset-2 bg-white/20 rounded-[24px] blur-md"></div>

      {/* Main Card Container */}
      <div className="relative w-full h-full rounded-[20px] overflow-hidden shadow-lg">
        {/* Background Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-[20px]"
        />

        {/* Dark Overlay for Better Text Visibility */}
        <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>

        {/* Bottom Content Section */}
        <div className="absolute bottom-0 left-0 p-4 w-full flex flex-col">
          {/* Members Avatars Section */}
          <div className="flex items-center space-x-2 mb-1">
            <div className="flex">
              {members.slice(0, 3).map((member, index) => (
                <img
                  key={index}
                  src={member}
                  alt={`Member ${index}`}
                  className={`w-6 h-6 rounded-full border-2 border-gray-800 ${
                    index > 0 ? "-ml-2" : ""
                  }`}
                />
              ))}
            </div>
            {/* Member Count Text */}
            <p className="text-white text-xs font-medium">+ 264 has joined</p>
          </div>

          {/* Community Title */}
          <h3 className="text-white font-semibold text-lg">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
