import { useEffect, useState } from "react";

interface ApiResponse {
  [key: string]: any;
}

interface FetchResult {
  loading: boolean;
  error: Error | null;
  apiData: any;
}

export const useFetch = (url: string, key?: string): FetchResult => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [apiData, setApiData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data: ApiResponse = await res.json();

        if (data) {
          console.log(data);

          if (key) {
            setApiData(data[key]);
          } else {
            setApiData(data);
          }

          setLoading(false);
        }
      } catch (error) {
        setError(error instanceof Error ? error : new Error("An error occurred"));
        setLoading(false);
        console.error(error);
      }
    };

    fetchData();
  }, [url, key]);

  return {
    loading,
    error,
    apiData,
  };
};
