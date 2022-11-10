/* eslint-disable no-unused-expressions */
import { useState } from "react";

export const GetBreed = ({ onNewValue }) => {
  const [ inputValue, setInputValue ] = useState('');

  const onInputChange = ({ target }) =>{
    setInputValue(target.value);
  };
  
  const onSubmit = (e) => {
    e.preventDefault();

    const newInputValue = inputValue.trim();
    newInputValue.length <= 0 ? null : onNewValue(newInputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
      type='text'
      placeholder="¿Que Raza buscas?"
      value={inputValue}
      onChange={onInputChange}
      />
    </form>
  )
};
