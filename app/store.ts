import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { priceApi } from "./api";

export const store = configureStore({
  reducer: {
    [priceApi.reducerPath]: priceApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      priceApi.middleware
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
