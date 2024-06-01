import { useState } from "react";

interface ArrowsVisibility {
  showArrows: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

export const useArrowsVisibility = (): ArrowsVisibility => {
  const [showArrows, setShowArrows] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setShowArrows(true);
  };

  const handleMouseLeave = () => {
    setShowArrows(false);
  };

  return { showArrows, handleMouseEnter, handleMouseLeave };
};
