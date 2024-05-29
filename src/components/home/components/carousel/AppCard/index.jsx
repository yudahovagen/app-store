import React, { useEffect, useRef } from "react";
import image_placeholder from "../../../../../images/image_placeholder.png";
import { Card, CardFavoriteButton, CardImage, CardTitle } from "../../../style";
import { useCardImageManager } from "./hooks/useCardImageManager";
import { useTheme } from "../../../../../global/themeContext.js";
import { useFavoriteManager } from "./hooks/useFavoriteManager.js";

export const AppCard = ({
  data,
  index,
  setCardFactor,
  horizontalAlignment,
}) => {
  const { isDarkMode } = useTheme();
  const cardRef = useRef(null);

  const { isFavorite, handleClick } = useFavoriteManager(data);
  const { cardImage } = useCardImageManager(data.artworkUrl100);

  useEffect(() => {
    const handleResize = () => {
      const cardRect = cardRef.current.getBoundingClientRect();
      const currentFactor = horizontalAlignment
        ? cardRect.width
        : cardRect.height;
      setCardFactor(currentFactor);
    };
    // only invoke for the first AppCard
    if (index === 0) {
      window.addEventListener("resize", handleResize);
      handleResize();
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Card
      $isDarkMode={isDarkMode}
      ref={cardRef}
      $horizontal={horizontalAlignment}
      onClick={handleClick}
    >
      <CardFavoriteButton $isFavorite={isFavorite}></CardFavoriteButton>
      <CardImage src={cardImage ? cardImage : image_placeholder} />
      <CardTitle>{data.name}</CardTitle>
    </Card>
  );
};
