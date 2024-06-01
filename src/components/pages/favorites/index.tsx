import React, { useEffect, useState } from "react";
import { FavoritesContainer, FavoritesTitle, ItemsOuter } from "./style";
import { useTheme } from "../../../global/themeContext";
import Item from "./components/item";
import { AppStoreFeedItem } from "../../../types/types";
import Navbar from "../../navbar";

export const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<AppStoreFeedItem[]>([]);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const fetchFavorites = () => {
      const storedFavorites = JSON.parse(
        localStorage.getItem("favorites") || "[]"
      ) as AppStoreFeedItem[];
      setFavorites(storedFavorites);
    };

    fetchFavorites();

    // Add event listener for storage changes
    window.addEventListener("storage", fetchFavorites);

    return () => {
      window.removeEventListener("storage", fetchFavorites);
    };
  }, []);

  return (
    <FavoritesContainer $isDarkMode={isDarkMode}>
      <Navbar isDarkMode={isDarkMode} />
      <FavoritesTitle $isDarkMode={isDarkMode}>Favorite Apps</FavoritesTitle>
      <ItemsOuter>
        {favorites.length > 0 ? (
          favorites.map((item, index) => (
            <Item key={item.id} item={item} isDarkMode={isDarkMode} />
          ))
        ) : (
          <p>No favorite apps found.</p>
        )}
      </ItemsOuter>
    </FavoritesContainer>
  );
};
