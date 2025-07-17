import { useParams, Link } from "react-router-dom";
import { Location, Series, Character } from "../components";
import { useSearch } from "../hooks/useSearch";
import { useState, useRef, useCallback } from "react";

export const Categories = () => {
  const { categorie } = useParams();
  const [pageNamber, setPageNamber] = useState(1);
  const { loading, dataPage, hasMore } = useSearch(categorie, pageNamber);
  const observer = useRef();

  const lastPage = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNamber((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [hasMore, loading]
  );

  return (
    <>
      {categorie === "character"
        ? dataPage.map((item, index) => {
            if (dataPage.length - 10 === index + 1) {
              return (
                <Link
                  ref={lastPage}
                  key={item.id}
                  to={`/categories/character/${item.id}`}
                >
                  <Character name={item.name} image={item.image} />
                </Link>
              );
            } else {
              return (
                <Link key={item.id} to={`/categories/character/${item.id}`}>
                  <Character name={item.name} image={item.image} />
                </Link>
              );
            }
          })
        : categorie === "location"
        ? dataPage.map((item, index) => {
            if (dataPage.length - 10 === index + 1) {
              return (
                <Link
                  ref={lastPage}
                  key={item.id}
                  to={`/categories/location/${item.id}`}
                >
                  <Location name={item.name} />
                </Link>
              );
            } else {
              return (
                <Link key={item.id} to={`/categories/location/${item.id}`}>
                  <Location name={item.name} />
                </Link>
              );
            }
          })
        : categorie === "episode"
        ? dataPage.map((item, index) => {
            if (dataPage.length - 10 === index + 1) {
              return (
                <Link
                  ref={lastPage}
                  key={item.id}
                  to={`/categories/episode/${item.id}`}
                >
                  <Series name={item.name} episode={item.episode} />
                </Link>
              );
            } else {
              return (
                <Link key={item.id} to={`/categories/episode/${item.id}`}>
                  <Series name={item.name} episode={item.episode} />
                </Link>
              );
            }
          })
        : null}
    </>
  );
};
