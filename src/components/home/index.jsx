import React from "react";
import { HomeContainer } from "./style";
import { Carousel } from "./components/carousel";
import { Navbar } from "../navbar";
import { useTheme } from "../../global/themeContext.js";
import { AppStoreApi, CarouselAlignment } from "../../types.d";
import { useAppStoreData } from "./components/carousel/hooks/useAppStoreData";
import { Loading } from "./components/carousel/loading";
// pass an enum that will hold all the data {alignment{vertical,horizontal}, }
// carousel will get data and alignment
export const Home = () => {
  const { isDarkMode } = useTheme();
  
  const { data: freeData } = useAppStoreData(AppStoreApi.Free);
  const { data: paidData } = useAppStoreData(AppStoreApi.Paid);
  
  return (
    <HomeContainer $isDarkMode={isDarkMode}>
      <Navbar />
      {freeData.items.length > 0 || paidData.items.length > 0 ? (
        <>
          <Carousel
            carouselData={freeData}
            alignment={CarouselAlignment.Horizontal}
            key={"horizontal"}
          />
          <Carousel
            carouselData={paidData}
            alignment={CarouselAlignment.Vertical}
            key={"vertical"}
          />
        </>
      ) : (
        <Loading />
      )}
    </HomeContainer>
  );
};
