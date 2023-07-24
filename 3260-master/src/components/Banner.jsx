import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage2 from '../images/banner1.jpg';
import ExampleCarouselImage3 from '../images/banner2.jpg';
import ExampleCarouselImage1 from '../images/banner3.jpg';
import '../css/banner.css';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  return (
    <Carousel id='banner' activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <img className='img-carousel' src={ExampleCarouselImage1} alt=""/>
        </Carousel.Item>
        <Carousel.Item>
        <img className='img-carousel' src={ExampleCarouselImage2} alt=""/>
        </Carousel.Item>
        <Carousel.Item>
        <img className='img-carousel' src={ExampleCarouselImage3} alt=""/>
        </Carousel.Item>

    </Carousel>
  );
}

export default ControlledCarousel;