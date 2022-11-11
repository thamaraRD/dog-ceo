/* eslint-disable no-unused-expressions */
import { useCallback, useEffect } from "react";
import { getBreed } from "../helpers/getAllOfBreeds";

export const GetBreed = ({ loadBreed }) => {
 

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadBreedHandle = useCallback(async(loadBreed) =>{
    const data = await getBreed();
    loadBreed(data)
  })
  
  useEffect(() => {
    loadBreedHandle(loadBreed)
  }, [loadBreedHandle])
  

  return(
    <div>
      
    </div>
  )
};
