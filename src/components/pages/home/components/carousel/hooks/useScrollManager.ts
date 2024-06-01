import { useState } from "react";
import { AppStoreFeedItem } from "../../../../../../types/types";

interface DataContainer {
  data: AppStoreFeedItem[];
}

interface ScrollManager {
  currentIndex: number;
  useTransition: boolean;
  handleNext: () => void;
  handlePrev: () => void;
}

export const useScrollManager = (
  dataContainer: DataContainer
): ScrollManager => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [useTransition, setUseTransition] = useState(true);

  const handleNext = (): void => {
    const nextIndex = (currentIndex + 1) % dataContainer.data.length;
    setCurrentIndex(nextIndex);
    setUseTransition(true);
  };

  const handlePrev = (): void => {
    const nextIndex =
      (currentIndex - 1 + dataContainer.data.length) %
      dataContainer.data.length;
    setCurrentIndex(nextIndex);
    setUseTransition(true);
  };

  return { currentIndex, useTransition, handleNext, handlePrev };
};
