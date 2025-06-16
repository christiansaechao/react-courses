import axios from "axios";
import React, { useState, useEffect } from "react";

export const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      if (data) {
        setData(data);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};
