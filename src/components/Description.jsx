// src/components/Description.jsx
import React from 'react';

const Description = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Description;
