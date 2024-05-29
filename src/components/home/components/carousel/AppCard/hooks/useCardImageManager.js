import { useEffect, useState } from "react";

export const useCardImageManager = (url) => {
  //!!! i wish the webWorker would work and i didn't need to use this hook !!!
  const [cardImage, setCardImage] = useState(null);

  useEffect(() => {
    // here we will fetch the image
    const getImage = async () => {
      try {
        const response = await fetch(url);
        if (response.status === 200) {
          setCardImage(response.url);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getImage();
  }, [url]);

  return { cardImage };
};
