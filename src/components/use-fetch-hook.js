import { useState, useEffect } from "react";
import axios from "axios";

const useMealFetcher = (id) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await axios.get(
          ` https://meals-api-gnwsbsmsja-ew.a.run.app/api/meals/${id}`
        );

        setData(response.data);
        setIsLoading(false);
      } catch {
        setError(true);
        setIsLoading(false);
        console.error("Failed to load");
      }
    };

    fetchData();
  }, []);

  return { data, error, isLoading };
};

export default useMealFetcher;
