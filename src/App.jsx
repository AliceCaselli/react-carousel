import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className='container'>
      <button className='arrow' onClick={prevImage}>&#9665;</button>
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
      <button className='arrow' onClick={nextImage}>&#9655;</button>
    </div>
  );
};



const App = () => {
  const imageUrls = [
    'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    'https://fastly.picsum.photos/id/319/200/300.jpg?hmac=-xZWQr-2igun1QhUD5zoRCQKvRl7bjB_gIbQuv26oj0',
    'https://fastly.picsum.photos/id/179/200/300.jpg?hmac=oo9H3-mvUxV9CjfSms5helxQW-n5PsZLzkg1ko78uFk',
    'https://fastly.picsum.photos/id/859/200/300.jpg?hmac=Ty9c6r04FYgwfkw5JMqSLG_eMq0RxeaMTAArotTX6Qk',
  ];

  return <Carousel images={imageUrls} />;
};

export default App;

