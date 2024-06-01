import React, { useEffect } from "react";
import { HomeContainer } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { APP_DATA_REQUESTED } from "../../../redux/features/appDataSlice";
import { RootState } from "../../../redux/store";
import Navbar from "../../navbar";
import AppList from "./components/appList";
import { useTheme } from "../../../global/themeContext";
import { AppStoreApi, CarouselAlignment } from "../../../types/types.d";

export const Home: React.FC = () => {
  const { isDarkMode } = useTheme();
  const dispatch = useDispatch();
  const freeData = useSelector(
    (state: RootState) => state.appData.data[AppStoreApi.Free]
  );
  const paidData = useSelector(
    (state: RootState) => state.appData.data[AppStoreApi.Paid]
  );

  useEffect(() => {
    dispatch(APP_DATA_REQUESTED());
  }, [dispatch]);

  return (
    <HomeContainer $isDarkMode={isDarkMode}>
      <Navbar isDarkMode={isDarkMode} />
      <AppList
        isDarkMode={isDarkMode}
        appsData={freeData}
        alignment={CarouselAlignment.Horizontal}
      />
      <AppList
        isDarkMode={isDarkMode}
        appsData={paidData}
        alignment={CarouselAlignment.Vertical}
      />
    </HomeContainer>
  );
};
