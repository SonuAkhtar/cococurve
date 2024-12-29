"use client";

import { useEffect, useState } from "react"; // react
import axios from "axios"; // axios

import { ApiRespDataType } from "@/types"; // type

const useFetchData = (url: string) => {
  const [data, setData] = useState<ApiRespDataType | null>(null);
  const [loadingData, setLoadingData] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingData(false);
      }
    };

    fetchData();
  }, []);

  return { data, loadingData };
};

export default useFetchData;
