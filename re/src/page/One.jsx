import React, { useContext } from 'react';
import { userData } from '../App';

function One() {
  const { one, updateOne } = useContext(userData);

  const handleButtonClick = () => {
    const updatedData = { name: 'knaika sharma', roll: 123 };
    updateOne(updatedData);
  };

  return (
    <div>
      <h1>{one.name}</h1>
      <p>Roll: {one.roll}</p>
      <button onClick={handleButtonClick}>Update Data</button>
    </div>
  );
}

export default One;
