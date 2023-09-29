import { useMemo } from "react";
import { useAxios } from "./use_axios";
const useHttp = (url) => {
  const axios = useAxios(url);

  const get = async (endpoint) => {
    const result = await axios.get(endpoint);
    return result.data;
  };

  return useMemo(
    () => ({
      get,
    }),
    [axios]
  );
};

module.exports = { useHttp };
