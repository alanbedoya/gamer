import { useState } from 'react';
import { resizedImage } from '../common/utils';
import { useSelector } from 'react-redux';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export const Carousel = ({ slides }) => {
  const { screenshots } = useSelector((state) => state.detail);

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className='gallery'>
      {screenshots.results &&
        screenshots.results.map((screenshots) => (
          <img
            src={resizedImage(screenshots.image, 1920)}
            key={screenshots.id}
            alt='gallery_image'
          />
        ))}
    </div>
  );
};
