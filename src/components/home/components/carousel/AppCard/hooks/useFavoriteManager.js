import { useEffect, useState } from "react";

export const useFavoriteManager=(data)=>{

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        if (favorites.some(fav => fav.id === data.id)) {
          setIsFavorite(true);
        }
      }, [data.id]);
    
      const handleClick = () => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const updatedFavorites = isFavorite
          ? storedFavorites.filter(fav => fav.id !== data.id)
          : [...storedFavorites, data];
    
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        setIsFavorite(!isFavorite);
    
        // Dispatch a storage event to notify other components
        window.dispatchEvent(new Event('storage'));
      };

    return {isFavorite,handleClick}
}