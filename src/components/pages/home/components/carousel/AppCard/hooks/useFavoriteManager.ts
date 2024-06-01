import { useEffect, useState } from "react";

interface AppData {
  id: string;
}

export const useFavoriteManager = (data: AppData) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites: AppData[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    if (favorites.some((fav) => fav.id === data.id)) {
      setIsFavorite(true);
    }
  }, [data.id]);

  const handleClick = () => {
    const storedFavorites: AppData[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    const updatedFavorites: AppData[] = isFavorite
      ? storedFavorites.filter((fav) => fav.id !== data.id)
      : [...storedFavorites, data];

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);

    window.dispatchEvent(new Event("storage"));
  };

  return { isFavorite, handleClick };
};
