/* eslint-env worker */

self.onmessage = async function (event) {
    const { imageUrls } = event.data;
    console.log("inside worker before request");
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
      self.postMessage(images);
    }
  };
  