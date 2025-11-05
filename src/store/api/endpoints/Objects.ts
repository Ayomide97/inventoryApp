import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseRestApiUrl } from "../api";

export type Objects = Object[];

export interface Object {
  id: string;
  name: string;
  data?: ObjectData;
}

export interface ObjectData {
  Generation?: string;
  Price?: string;
  Capacity?: string;
  "Screen size"?: number;
  Color?: string;
  Description?: string;
  "Strap Colour"?: string;
  "Case Size"?: string;
  year?: number;
  price?: number;
  "CPU model"?: string;
  "Hard disk size"?: string;
  generation?: string;
  color?: string;
  "capacity GB"?: number;
  capacity?: string;
}

export const ObjectsApi = createApi({
  reducerPath: "objects",
  baseQuery: fetchBaseQuery({ baseUrl: BaseRestApiUrl }),
  endpoints: (builder) => ({
    getObjects: builder.query<any[], void>({
      query: () => "/products",
    }),
  }),
});

export const { useGetObjectsQuery } = ObjectsApi;
