import React, { useEffect, useRef, useState } from "react";
import { AppCard } from "./AppCard";
import { AppsContainer, InnerContainer, ArrowButton } from "../../style";
import { useArrowsVisibility } from "./hooks/useArrowsVisibility";
import { useScrollManager } from "./hooks/useScrollManager";

export const Carousel = ({ carouselData, alignment }) => {
  const [cardFactor, setCardFactor] = useState(0);
  const innerContainerRef = useRef(null);
  const cardsMargin = 20;

  const { showArrows, handleMouseEnter, handleMouseLeave } =
    useArrowsVisibility();

  const { currentIndex, useTransition, handleNext, handlePrev } =
    useScrollManager(carouselData);

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = innerContainerRef.current.offsetWidth;
      const itemFactor = cardFactor
        ? cardFactor
        : containerWidth / carouselData.items.length - 2;
      if (alignment) {
        innerContainerRef.current.style.transform = `translateX(-${
          currentIndex * (itemFactor + cardsMargin)
        }px)`;
      } else {
        innerContainerRef.current.style.transform = `translateY(-${
          currentIndex * (itemFactor + cardsMargin)
        }px)`;
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
