import { useEffect, useState } from "react";
import config from "../../../../../config";
import { AppStoreApi, AppStoreFeed, AppStoreFeedResult } from "../../../../../types.d";

const buildUrl = (api: AppStoreApi) => {
  switch (api) {
    case AppStoreApi.Free:
      return config.appStore.api.free;
    case AppStoreApi.Paid:
      return config.appStore.api.paid;
    default:
      return;
  }
};

// change hook name to app store data fetcher
export const useAppStoreData = (api: AppStoreApi) => {
  const [data, setData] = useState<AppStoreFeed>({
    items: [],
    title: "",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        let url = buildUrl(api);
        if (!url) return;
        const request = await fetch(url);
        const response:AppStoreFeedResult = await request.json();

        if (response.feed && response.feed.results) {
          setData({
            items: response.feed.results,
            title: response.feed.title,
          });
        }
      } catch (e) {
        console.log("failed to fetch data from API", e);
      }
    };
    getData();
  }, [api]);

  return { data };
};
