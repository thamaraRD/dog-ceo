/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { Header } from './Header';
import { GetBreed } from './GetBreed';
import { Footer } from './Footer';
import { GetSubBreed } from './GetSubBreed';
import { GetDogCard } from './GetDogCard';
import { GetDogImage } from './GetDogImage';

export const DogApp = () => {
  const [breeds, setBreeds] = useState(['akita']);

  
  const handleAddValue = (onNewValue) => {
    console.log(onNewValue);
    if (
      !breeds.some(
        (breeds) => breeds.toLowerCase() === onNewValue.toLowerCase()
      )
    ) {
      setBreeds([onNewValue, ...breeds]);
    }
  };
  
  return (
    <>
    <Header />
    <GetBreed onNewValue={handleAddValue} />
    <GetSubBreed />
   
      {breeds.map((breed) => (
        <GetDogCard key={breed} breed={breed} />
      ))
      }
      {/* {
        breeds.map((breed) => (
          <GetDogImage key={breed} breed={breed} />
        ))
      }   */}
   
    <Footer />
    </>
  )
};
