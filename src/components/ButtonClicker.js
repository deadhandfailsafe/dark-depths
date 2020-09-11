import React, { useState } from 'react';

const ButtonClicker = ({ unitsOfBlood, setUnitsOfBlood }) => {
  return (
    <>
      <button onClick={() => setUnitsOfBlood(unitsOfBlood + 1)}>
        Click Me
      </button>
    </>
  );
};

export default ButtonClicker;
