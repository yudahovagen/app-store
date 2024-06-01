import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppStoreApi, AppStoreFeed } from "../../types/types.d";

interface AppDataState {
  data: {
    [key in AppStoreApi]: {
      items: Array<any & { imageUrl: string | null }>;
      title: string;
      loading: boolean;
      error: string | null;
    };
  };
}

const initialState: AppDataState = {
  data: {
    [AppStoreApi.Free]: { items: [], title: "", loading: false, error: null },
    [AppStoreApi.Paid]: { items: [], title: "", loading: false, error: null },
  },
};

export const appDataSlice = createSlice({
  name: "appData",
  initialState,
  reducers: {
    APP_DATA_REQUESTED: (state) => {
      return {
        ...state,
        data: {
          [AppStoreApi.Free]: {
            ...state.data[AppStoreApi.Free],
            loading: true,
            error: null,
          },
          [AppStoreApi.Paid]: {
            ...state.data[AppStoreApi.Paid],
            loading: true,
            error: null,
          },
        },
      };
    },
    APP_DATA_SUCCEEDED: (
      state,
      action: PayloadAction<{ data: AppStoreFeed; api: AppStoreApi }>
    ) => {
      const { data, api } = action.payload;
      state.data[api] = {
        ...state.data[api],
        items: data.items,
        title: data.title,
        loading: false,
        error: null,
      };
    },
    APP_DATA_FAILED: (
      state,
      action: PayloadAction<{ error: string; api: AppStoreApi }>
    ) => {
      const { error, api } = action.payload;
      state.data[api].loading = false;
      state.data[api].error = error;
    },
  },
});

export const { APP_DATA_FAILED, APP_DATA_REQUESTED, APP_DATA_SUCCEEDED } =
  appDataSlice.actions;

export default appDataSlice.reducer;
