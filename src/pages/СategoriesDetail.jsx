import { Location, Series, Character } from "../components";
import characters from "../data/characters.json" assert { type: "json" };
import location from "../data/location.json" assert { type: "json" };
import series from "../data/episode.json" assert { type: "json" };
import { useParams } from "react-router-dom";


export const CategoriesDetail = () => {
  const params = useParams();
  const id = Number(params.id-1)
 
 const render = () => {
    switch (params.categorie) {
      case 'characters':
        return <Character name={characters[id].name} status={characters[id].status} species={characters[id].species} type={characters[id].type} gender={characters[id].gender} image={characters[id].image} created={characters[id].created} />
      case 'locations':
        return <Location name={location[id].name} type={location[id].type} created={location[id].created} dimension={location[id].dimension}/>
      case 'episodes':
        return <Series name={series[id].name} air_date={series[id].air_date} episode={series[id].air_date} created={series[id].created}  />
      default:
        return null
    } 

 }
  return <>{render()}</>
};