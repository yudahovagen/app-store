import { put, takeLatest, fork } from "redux-saga/effects";
import {
  APP_DATA_FAILED,
  APP_DATA_REQUESTED,
  APP_DATA_SUCCEEDED,
} from "../features/appDataSlice";

import config from "../../config";
import { AppStoreApi, AppStoreFeedResult } from "../../types/types.d";

const buildUrl = (api: AppStoreApi): string | undefined => {
  switch (api) {
    case AppStoreApi.Free:
      return config.appStore.api.free;
    case AppStoreApi.Paid:
      return config.appStore.api.paid;
    default:
      return undefined;
  }
};

const fetchData = async (url: string) => {
  const opts = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };
  const response = await fetch(url, opts);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data: AppStoreFeedResult = await response.json();
  return data;
};

interface FetchAppDataAction {
  type: typeof APP_DATA_REQUESTED.type;
  payload: AppStoreApi;
}

function* fetchAppData(action: FetchAppDataAction) {
  try {
    const apiKey = String(action.payload);
    const url = buildUrl(action.payload);
    if (!url) throw new Error("Invalid API");

    const cachedData = sessionStorage.getItem(apiKey);
    if (cachedData) {
      yield put(
        APP_DATA_SUCCEEDED({
          data: JSON.parse(cachedData),
          api: action.payload,
        })
      );
    } else {
      const response: AppStoreFeedResult = yield fetchData(url);

      if (response.feed && response.feed.results) {
        const data = {
          items: response.feed.results,
          title: response.feed.title,
        };
        const serializedData = JSON.stringify(data);
        sessionStorage.setItem(apiKey, serializedData);
        yield put({
          type: APP_DATA_SUCCEEDED.type,
          payload: { data, api: action.payload },
        });
      } else {
        yield put({
          type: APP_DATA_FAILED.type,
          payload: { error: "No data available", api: action.payload },
        });
      }
    }
  } catch (err: any) {
    yield put({
      type: APP_DATA_FAILED.type,
      payload: { error: err.message, api: action.payload },
    });
  }
}
function* fetchAllAppData() {
  try {
    yield fork(fetchAppData, {
      type: APP_DATA_REQUESTED.type,
      payload: AppStoreApi.Free,
    });
    yield fork(fetchAppData, {
      type: APP_DATA_REQUESTED.type,
      payload: AppStoreApi.Paid,
    });
  } catch (err) {
    console.error("Error fetching app data:", err);
  }
}

function* watchAppDataFetcher() {
  yield takeLatest(APP_DATA_REQUESTED.type, fetchAllAppData);
}

export default watchAppDataFetcher;
