import { useParams, Link } from "react-router-dom";
import characters from "../data/characters.json" assert { type: "json" };
import location from "../data/location.json" assert { type: "json" };
import series from "../data/episode.json" assert { type: "json" };
import { Location, Series, Character } from "../components";

export const Categories = () => {
  const params = useParams();
 
  return (
    <>
      {params.categorie === "characters"
        ? characters.map((item) => (<Link key={item.id} to={`/categories/characters/${item.id}`}>
            <Character  name={item.name} image={item.image} />
            </Link>
          ))
        : params.categorie === "locations"
        ? location.map((item) => <Link key={item.id} to={`/categories/locations/${item.id}`}><Location name={item.name} /></Link>)
        : params.categorie === "episodes"
        ? series.map((item) => (
            <Link key={item.id}  to={`/categories/episodes/${item.id}`}><Series name={item.name} episode={item.episode}  /></Link>
          ))
        : null}
    </>
  );
};
