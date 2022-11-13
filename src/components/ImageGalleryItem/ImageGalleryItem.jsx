import React from 'react';
import {ImageGalleryList, ImageGalleryImage} from './ImageGalleryItemStyled';
import PropTypes from 'prop-types';


export const ImageGalleryItem = ({image, largeImg, name, onClick}) => {
  return (
    <ImageGalleryList onClick={() => onClick(largeImg)}>
        <ImageGalleryImage src={image} alt={name} />
    </ImageGalleryList>
  )
}

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

