import axios from "axios";
import { useEffect, useState } from "react";

export const useSearch = (category, pageNamber) => {
  const [loading, setLoading] = useState(true);
  const [dataPage, setDataPage] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);

    let cancel;
    axios({
      method: "GET",
      url: `https://rickandmortyapi.com/api/${category}`,
      params: {
        page: pageNamber,
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    }).then((res) => {
      setDataPage((prevState) => {
        return [...new Set([...prevState, ...res.data.results])];
      });
      setHasMore(res.data.results.length > 0);
      setLoading(false);
    });
    return () => cancel();
  }, [category, pageNamber]);

  return { loading, dataPage, hasMore };
};
