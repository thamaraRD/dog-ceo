import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { description } from "../assets/texts";
import { getImageBreed } from "../helpers/getAllOfBreeds";

export const GetDogImage = ({ dogImage = [] }) => {
  const [imageBreed, setImageBreed] = useState([]);
  const [dogDataImages, setDogDataImages] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    dogImage.map((dog) => {
      getImageBreed(dog).then((data) => {
        setImageBreed(data.splice(0, 6));
        setLoader(true);
      });
    });
  }, [dogImage]);

  useEffect(() => {
    setDogDataImages([ ...imageBreed]);
  }, [imageBreed]);

  return (
      <>
        { imageBreed.length === 0 ? (
          <div className="container mt-5 text-center">
            <h4 className="text-danger">{description.INFO_DESCRIPTION}</h4>
          </div>
        ) : (
          <div className="container-css">
        <div className="card-grid">
          {dogDataImages.map((image, index) => (
            <img className="photo-dog" key={index} src={image} alt="pretty doggui" />
          ))}
        </div>
      </div>
          )}
      </>
      )
};

GetDogImage.prototypes = {
  className: PropTypes.string,
  image: PropTypes.string
};
