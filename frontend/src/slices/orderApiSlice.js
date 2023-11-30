import { apiSlice } from "./apiSlice";
import { ORDERS_URL } from "../constants";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL,
        method: "POST",
        body: { ...order },
      }),
    }),
    getOrderDetials: builder.query({
      query: (orderId) => ({
        url: `${ORDERS_URL}/${orderId}`,
        keepUnusedDataFor: 5,
      }),
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrderDetialsQuery } =
  orderApiSlice;
