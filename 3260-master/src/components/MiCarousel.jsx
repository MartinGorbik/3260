import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function esBase64(str) {
  try {
    return btoa(atob(str)) === str;
  } catch (err) {
    return false;
  }
}

function MiCarousel({ fotos }) {
  return (
    <Carousel>
      {fotos.map((foto, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={esBase64(foto) ? `data:image/jpeg;base64,${foto}` : foto}
            style={{ maxWidth: '200px', maxHeight: '200px' }}
            alt={`Imagen ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MiCarousel;