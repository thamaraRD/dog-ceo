// import { useEffect, useState } from "react";
// import {getImageBreed} from '../helpers/getAllOfBreeds'

// export const GetDogImage = ({ breed }) => {
//   const [imageBreed, setImageBreed] = useState([]);
//   console.log(imageBreed);
//   useEffect(() => {
//     getImageBreed(breed).then(data => {setImageBreed(data.splice(0,5))})
//   }, [])
//   return(
//     <div className="card">
//       {imageBreed.map((image, index) =>
//        <img src={image} alt='' /> 
//       )}
//     </div>
//   )
// };
