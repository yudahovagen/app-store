import React, { useEffect, useState } from "react";
import { FavoritesContainer } from "./style";
import { AppCard } from "../home/components/carousel/AppCard";
import { NavButtons } from "../navbar/style";
import { Link } from "react-router-dom";
import { useTheme } from "../../global/themeContext.js";

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const fetchFavorites = () => {
      const storedFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];
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
      <NavButtons as={Link} to="/">
        Home
      </NavButtons>
      {favorites.length > 0 ? (
        favorites.map((item) => <AppCard key={item.id} data={item} />)
      ) : (
        <p>No favorite apps found.</p>
      )}
    </FavoritesContainer>
  );
};
