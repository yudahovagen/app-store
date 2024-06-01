import { useEffect, useState } from "react";

interface CardImageData {
  url: string | null;
}

export const useCardImageManager = (url: string): CardImageData => {
  const [cardImage, setCardImage] = useState<string | null>(null);

  useEffect(() => {
    const getImage = async () => {
      try {
        const response = await fetch(url);
        if (response.status === 200) {
          setCardImage(response.url);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getImage();
  }, [url]);
  return { url: cardImage };
};
