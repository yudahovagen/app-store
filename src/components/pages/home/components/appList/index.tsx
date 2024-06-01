import React from "react";
import {
  AppStoreFeedItem,
  CarouselAlignment,
} from "../../../../../types/types";
import Carousel from "../carousel";
import Loading from "../loading";
import Error from "../loading/Error";

interface AppListProps {
  isDarkMode: boolean;
  appsData: {
    loading: boolean;
    error: string | null;
    items: AppStoreFeedItem[];
  };
  alignment: CarouselAlignment;
}

const AppList: React.FC<AppListProps> = ({
  isDarkMode,
  appsData,
  alignment,
}) => {
  return (
    <>
      {appsData.loading ? (
        <Loading />
      ) : appsData.error ? (
        <Error isDarkMode={isDarkMode} />
      ) : (
        <Carousel
          carouselData={appsData}
          alignment={alignment}
          key={"horizontal"}
        />
      )}
    </>
  );
};

export default AppList;
