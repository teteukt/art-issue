import axios from "axios";
import { useMemo } from "react";

const useAxios = (url) => {
  const instance = axios.create({
    baseURL: url,
  });
  return instance;
};

module.exports = { useAxios };
