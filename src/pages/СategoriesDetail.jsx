import { Location, Series, Character } from "../components";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react'

export const CategoriesDetail = () => {
 const {categorie, id} = useParams();
 const [data, setData] = useState([])
 const newId =Number(id - 1);

 useEffect(() => {
    detailData(categorie)
  }, [categorie])

  const detailData = async (categorie) => {
    
    try {
      const { data } = await axios.get(`https://rickandmortyapi.com/api/${categorie}`)

      setData(data.results)
      
    } catch (error) {
      console.log(error)
    }
  }

  
 const render = () => {
    switch (categorie) {
      case 'character':
        return <Character name={data[newId].name} status={data[newId].status} species={data[newId].species} type={data[newId].type} gender={data[newId].gender} image={data[newId].image} created={data[newId].created} />
      case 'location':
        return <Location name={data[newId].name} type={data[newId].type} created={data[newId].created} dimension={data[newId].dimension}/>
      case 'episode':
        return <Series name={data[newId].name} air_date={data[newId].air_date} episode={data[newId].air_date} created={data[newId].created}  />
      default:
        return null
    } 

 }
  return <>{render()}</>
};