import { useState } from "react";

export const useScrollManager = (dataContainer) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [useTransition, setUseTransition] = useState(true);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % dataContainer.data.length;
    const shouldDisableTransition = nextIndex === 0;
    setUseTransition(!shouldDisableTransition); // Enable transition if not at the loop point

    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const nextIndex =
      (currentIndex - 1 + dataContainer.data.length) %
      dataContainer.data.length;
    const shouldDisableTransition = nextIndex === dataContainer.data.length - 1;
    setUseTransition(!shouldDisableTransition); // Enable transition if not at the loop point

    setCurrentIndex(nextIndex);
  };

  return { currentIndex, useTransition, handleNext, handlePrev };
};
