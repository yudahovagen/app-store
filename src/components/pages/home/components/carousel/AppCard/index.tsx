import React, { useEffect, useRef } from "react";
import image_placeholder from "../../../../../../images/image_placeholder.png";
import { Card, CardFavoriteButton, CardImage, CardTitle } from "../../../style";
import { useCardImageManager } from "./hooks/useCardImageManager";
import { useFavoriteManager } from "./hooks/useFavoriteManager";
import {
  AppStoreFeedItem,
  CarouselAlignment,
} from "../../../../../../types/types";
import { useTheme } from "../../../../../../global/themeContext";

interface AppCardProps {
  data: AppStoreFeedItem;
  index: number;
  setCardFactor: React.Dispatch<React.SetStateAction<number>>;
  alignment: CarouselAlignment;
}

const AppCard: React.FC<AppCardProps> = ({
  data,
  index,
  setCardFactor,
  alignment,
}) => {
  const { isDarkMode } = useTheme();
  const cardRef = useRef<HTMLDivElement>(null);

  const { isFavorite, handleClick } = useFavoriteManager(data);
  const { url: cardImageUrl } = useCardImageManager(data.artworkUrl100);

  useEffect(() => {
    const handleResize = () => {
      const cardRect = cardRef.current?.getBoundingClientRect();
      if (cardRect) {
        const currentFactor = alignment ? cardRect.width : cardRect.height;
        setCardFactor(currentFactor);
      }
    };

    if (index === 0) {
      window.addEventListener("resize", handleResize);
      handleResize();
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [index, alignment, setCardFactor]);

  return (
    <Card
      $isDarkMode={isDarkMode}
      ref={cardRef}
      $horizontal={alignment}
      onClick={handleClick}
    >
      <CardFavoriteButton $isFavorite={isFavorite}></CardFavoriteButton>
      <CardImage src={cardImageUrl || image_placeholder} />
      <CardTitle>{data.name}</CardTitle>
    </Card>
  );
};

export default AppCard;
