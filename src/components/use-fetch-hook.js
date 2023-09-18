import { useState, useEffect } from "react";

const useMealFetcher = (id, category, sortDirection, page) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        let url;
        if (sortDirection !== "") {
          url = `https://momentous-quill-production.up.railway.app/${id}?strCategory=${category}&sort=price,${sortDirection}&page=${page}&limit=6`;
        } else {
          url = `https://momentous-quill-production.up.railway.app/${id}?strCategory=${category}&page=${page}&limit=6`;
        }
        fetch(url, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setData(data.data.meals);
          });

        setIsLoading(false);
      } catch {
        setError(true);
        setIsLoading(false);
        console.error("Failed to load");
      }
    };

    fetchData();
  }, [category, sortDirection, page]);
  return { data, error, isLoading };
};

export default useMealFetcher;
