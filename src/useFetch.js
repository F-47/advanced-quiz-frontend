import { useEffect, useState } from "react";

const useFetch = (url) => {
  let [data, setData] = useState([]);
  let [isPending, setIsPending] = useState(false);

  const fetchData = async (url) => {
    setIsPending(true);
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
      setIsPending(false)
    } catch (error) {
      console.log(error)
      setIsPending(false)
    }
  }
  useEffect(() => {
    fetchData(url)
  }, [url])

  return { data, isPending };
};

export default useFetch;
