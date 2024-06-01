import React from "react";
import { ItemContainer, ItemData } from "../../style";
import { AppStoreFeedItem } from "../../../../../types/types";
import { useFavoriteManager } from "../../../home/components/carousel/AppCard/hooks/useFavoriteManager";

interface ItemProps {
  item: AppStoreFeedItem;
  isDarkMode: boolean;
}

const Item: React.FC<ItemProps> = ({ item, isDarkMode }) => {
  const { handleClick } = useFavoriteManager(item);
  return (
    <ItemContainer onClick={handleClick} $isDarkMode={isDarkMode}>
      <ItemData>{item.name}</ItemData>
      <br />
      <br />
      <ItemData>Release Date:{item.releaseDate}</ItemData>
    </ItemContainer>
  );
};

export default Item;
