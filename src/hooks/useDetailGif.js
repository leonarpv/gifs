import React, { useEffect, useState, useMemo } from "react";
import { useQuery, queryCache } from "react-query";
import { KEY_GIF } from "../utils/constants";
import { fetchGif } from "../fetchers";

const getGif = async (key, id) => fetchGif(id);

export default function useGifDetail(gifId) {
  return useQuery([KEY_GIF, gifId], getGif, {
    initialData: () => {
      return queryCache.getQueryData(KEY_GIF)?.find((d) => d.id == gifId);
    },
    initialStale: true,
  });
}
