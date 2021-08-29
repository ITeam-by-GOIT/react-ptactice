import React from 'react';

const ImageList = ({ images }) => {
  return (
    <ul>
      {images.map(image => {
        return (
          <li key={image.id}>
            <img src={image.src.small} alt="" />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageList;
