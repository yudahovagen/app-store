import React, { useEffect, useRef, useState } from "react";
import { AppsContainer, InnerContainer, ArrowButton } from "../../style";
import { useScrollManager } from "./hooks/useScrollManager";
import {
  AppStoreFeedItem,
  CarouselAlignment,
} from "../../../../../types/types";
import { useArrowsVisibility } from "./hooks/useArrowsVisibility";
import AppCard from "./AppCard/index";

interface CarouselProps {
  carouselData: {
    loading: boolean;
    error: string | null;
    items: AppStoreFeedItem[];
  };
  alignment: CarouselAlignment;
}
interface DataContainer {
  data: AppStoreFeedItem[];
}

const Carousel: React.FC<CarouselProps> = ({ carouselData, alignment }) => {
  const [cardFactor, setCardFactor] = useState(0);
  const innerContainerRef = useRef<HTMLDivElement>(null);
  const cardsMargin = 20;

  const { showArrows, handleMouseEnter, handleMouseLeave } =
    useArrowsVisibility();

  const carouselDataContainer: DataContainer = {
    data: carouselData.items,
  };

  const { currentIndex, useTransition, handleNext, handlePrev } =
    useScrollManager(carouselDataContainer);

  useEffect(() => {
    const handleResize = () => {
      const innerContainer = innerContainerRef.current;
      if (innerContainer) {
        const containerWidth = innerContainer.offsetWidth;
        const itemFactor = cardFactor
          ? cardFactor
          : containerWidth / carouselData.items.length - 2;
        if (alignment) {
          innerContainer.style.transform = `translateX(-${
            currentIndex * (itemFactor + cardsMargin)
          }px)`;
        } else {
          innerContainer.style.transform = `translateY(-${
            currentIndex * (itemFactor + cardsMargin)
          }px)`;
        }
      }
    };

    if (carouselData.items.length > 0) {
      window.addEventListener("resize", handleResize);
      handleResize();
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentIndex, carouselData, cardFactor, alignment]);

  return (
    <>
      <AppsContainer
        $horizontal={alignment}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ArrowButton
          $horizontal={alignment}
          $isFirst={true}
          $showArrows={showArrows}
          onClick={handlePrev}
        ></ArrowButton>
        <InnerContainer
          $horizontal={alignment}
          ref={innerContainerRef}
          $useTransition={useTransition}
        >
          {carouselData.items.length > 0 &&
            carouselData.items.map((item, index) => (
              <AppCard
                alignment={alignment}
                key={item.id + index}
                data={item}
                index={index}
                setCardFactor={setCardFactor}
              />
            ))}
        </InnerContainer>
        <ArrowButton
          $horizontal={alignment}
          $isFirst={false}
          $showArrows={showArrows}
          onClick={handleNext}
        ></ArrowButton>
      </AppsContainer>
    </>
  );
};

export default Carousel;
