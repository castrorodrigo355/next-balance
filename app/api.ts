import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BalanceProps, BalanceResultProps } from "../typings/api";
import { baseUrl } from "./baseUrl";

export const priceApi = createApi({
  reducerPath: "priceReducer",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["price", "balance"],
  endpoints: (builder) => ({
    getPrice: builder.query<void, void>({
      query: () => "/price",
      providesTags: ["price"],
    }),
    requestBalance: builder.mutation<BalanceResultProps, BalanceProps>({
      query: (body) => ({
        url: "/balance",
        method: "POST",
        body,
      }),
      invalidatesTags: ["balance"],
    }),
  }),
});

export const {
  useGetPriceQuery,
  useLazyGetPriceQuery,
  useRequestBalanceMutation,
} = priceApi;
