import { useState } from "react";

export const useArrowsVisibility = () => {
  const [showArrows, setShowArrows] = useState(false);

  const handleMouseEnter = () => {
    setShowArrows(true);
  };

  const handleMouseLeave = () => {
    setShowArrows(false);
  };
  return { showArrows, handleMouseEnter, handleMouseLeave };
};
