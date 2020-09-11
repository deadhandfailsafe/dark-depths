import React, { useState } from 'react';
import ButtonClicker from './ButtonClicker';
import styled from 'styled-components';

const CardMain = () => {
  const [unitsOfBlood, setUnitsOfBlood] = useState(0);

  const ButtonMain = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #7f0000;
    color: #7f0000;
    margin: 0 1em;
    padding: 0.25em 1em;
  `;

  return (
    <>
      <h3>{unitsOfBlood} Units of Blood</h3>
      <ButtonMain onClick={() => setUnitsOfBlood(unitsOfBlood + 1)}>
        Conduct Ritual
      </ButtonMain>
    </>
  );
};

export default CardMain;
