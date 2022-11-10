const baseUrl = 'https://dog.ceo/api/';

export const getBreed = async () => {
  const url = `${baseUrl}breeds/list/all`
  const resp = await fetch(url);
  const data = await resp.json();
  const breed = Object.keys(data.message);
  return breed;
};

export const getImageBreed = async (breed) =>{
  const url = `${baseUrl}breed/${breed}/images`;
  const resp = await fetch(url);
  console.log(resp)
  const images  = await resp.json();
  return images.message;
};


