/* eslint-disable no-unused-expressions */
import { useState } from "react";
import { Header } from "./Header";
import { GetBreed } from "./GetBreed";
import { Footer } from "./Footer";
import { GetSubBreed } from "./GetSubBreed";
import { GetBreedList } from "./GetBridList";
import { GetDogImage } from "./GetDogImage";

export const DogApp = () => {
  const [breeds, setBreeds] = useState(["akita"]);

  return (
    <>
      <Header />
      {/* <GetBreed onNewValue={handleAddValue} /> */}
      {/* <GetSubBreed /> */}
      <GetBreedList />
      <GetDogImage />

      {/* {breeds.map((breed) => (
        <GetBreedList key={breed} breed={breed} />
      ))
      } */}
      {/* {
        breeds.map((breed) => (
          <GetDogImage key={breed} breed={breed} />
        ))
      }  
    */}
      <Footer />
    </>
  );
};
