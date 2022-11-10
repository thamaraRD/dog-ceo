import { useEffect, useState } from "react";
import {  getBreed } from "../helpers/getAllOfBreeds";

export const useFetchImages = ( breed ) => {

  const [dataBreed, setDataBreed] = useState([]);
    
  const getImages = async () => {
      const getBreed = await getBreed(breed);
      setDataBreed(dataBreed);
  };

  useEffect(() => {
    
    getImages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return {
    message
  }


};
