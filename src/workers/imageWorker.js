/* eslint-env worker */

onmessage = async function (event) {
  const { imageUrls } = event.data;
  
  if(imageUrls){
    const imagePromises = imageUrls.map(async (url) => {
      const response = await fetch(url);
      const blob = await response.blob();
      return {
        url,
        blobUrl: URL.createObjectURL(blob),
      };
    });
    
    const images = await Promise.all(imagePromises);
    postMessage(images);
  }
};
