import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function MiCarousel({ fotos }) {
  return (
    <Carousel>
      {fotos.map((foto, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={`data:image/jpeg;base64,${foto}`}
            style={{ maxWidth: '200px', maxHeight: '200px' }}
            alt={`Imagen ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MiCarousel;