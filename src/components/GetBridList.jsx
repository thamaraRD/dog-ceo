import { useEffect, useState } from "react";
import { Select } from "antd";
import { getBreed } from "../helpers/getAllOfBreeds";
import "antd/dist/antd.css";
import { GetDogImage } from "./GetDogImage";

export const GetBreedList = () => {
  const [breedDog, setBreedDog] = useState([]);
  const [dogImage, setDogImage] = useState([]);
  

  
  useEffect(() => {
    getBreed().then((data) => {
      setBreedDog(data);
    });
  }, []);



  const handleChange = (value) => {

    setDogImage(value);
  };

  // useEffect(() => {
  //   setValue(['pug'])
  // }, [])
  

  const { Option } = Select;

  return (
    <>
      <Select className="selectList"
        placeholder="Seleccione una raza"
        size="large"
        showSearch
        optionFilterProp="children"
        mode="multiple"
        onChange={handleChange}
      >
        {breedDog.map((breed, index) => (
          <Option key={index} value={breed}>
            {breed}
          </Option>
        ))}
      </Select>

      <GetDogImage dogImage={dogImage} />
    </>
  );
};
