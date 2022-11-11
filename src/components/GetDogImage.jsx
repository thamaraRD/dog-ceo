import { useEffect, useState } from "react";
import { getImageBreed } from "../helpers/getAllOfBreeds";

export const GetDogImage = ({ dogImage }) => {
  const [dogDataImages, setDogDataImages] = useState([]);

  const images = [];

  const fetchData = () => {
    const array = []

    if(dogImage){

      dogImage.map(async(dog) =>{
        const data = await getImageBreed(dog)
        array.push(data);
  
      })
    return array;
    }

   
  }
 
  // // console.log(test);
  // console.log('images', images);

  // // console.log(imageBreed, "imageBreed");
  // console.log('dogImage', dogImage);

  // dogImage.map( async(dog) => {
  //   const arrayImages = await getImageBreed(dog)
  //   getImageBreed(dog).then((data) => {
      
  //     // setImageBreed(data.splice(0, 3).push(images));
  //     images.push(data)
  //     setDogDataImages(images)
  //     console.log('dogDataImages',dogDataImages);
  //   });
  
  // useEffect(() => {
  //   // getImageBreed('pug').then(data => {setImageBreed(data)});

  //   const fetch = async () => {
  //       const getFetch = await getImageBreed()
     
  // }});
  
    
  //   fetch()
  // }, [dogImage]);

  useEffect(() => {
    // declare the data fetching function
   


  
    // call the function
    fetchData()
    const images = fetchData()
    setDogDataImages(images)
      // make sure to catch any error
    console.log(dogDataImages);

  }, [dogImage])

  // useEffect(() => {
  //   // getImageBreed('pug').then(data => {setImageBreed(data)});
  //   setTest([...imageBreed, test]);
  //   console.log(test);
  // }, [imageBreed]);

  return (
    // <div>
    //   <h1>jesús</h1>
    // </div>
    <div className="card">
      {images.map((image, index) => (
        <img src={image} alt="" />
      ))}
    </div>
  );
};
