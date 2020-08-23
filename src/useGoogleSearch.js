import React, { useState, useEffect } from "react";
import API_KEY from "./keys";
import { useStateValue } from "./StateProvider";
const CONTEXT_KEY = "8588aa27e37c0de65";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
