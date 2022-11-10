import { useEffect, useState } from "react";
import { getBreed } from "../helpers/getAllOfBreeds";


const baseUrl = 'https://dog.ceo/api/';

const getList = async () => {

  const url = `${baseUrl}breeds/list/all`
  const resp = await fetch(url);
  const data = await resp.json();
  const breed = Object.keys(data.message);
  console.log('BREED', breed);
  
  const list = breed.map( breed => breed )
// console.log('list', list);
return list;
}
export const GetDogCard = ({breed}) => {
 
  //   const [dataBreed, setDataBreed] = useState([]);
  
  // useEffect(() => {
    // getBreed(breed).then(data => {setDataBreed(data)})
    // }, [])
 
  useEffect(() => {
   
    getList();
    console.log('getList()', getList());
  }, [])
  

  return (
    <>
   
    <h3>{breed}</h3>
    <select>
      <option>Selecciona la raza</option>
      {Object.keys(breed).map((breed, index) =>
      <option key={index}>{breed}</option>
      ).join()}
    </select>
    
    {/* {breed.map((breed, index) =>
      <p key={index}>{breed}</p>
      )} */}
    
  
    </>
  )
};

