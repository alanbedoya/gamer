import { useState } from 'react';
import { resizedImage } from '../common/utils';
import { fadeIn } from '../animation';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export const Carousel = () => {
  const { screenshots } = useSelector((state) => state.detail);

  const [current, setCurrent] = useState(0);
  const length = screenshots.results.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(screenshots.results) || screenshots.results.length <= 0) {
    return null;
  }

  return (
    <div className='gallery'>
      <FaArrowAltCircleLeft className='leftArrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='rightArrow' onClick={nextSlide} />
      {screenshots.results &&
        screenshots.results.map((screenshots, index) => (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={screenshots.id}
          >
            {index === current && (
              <motion.img
                variants={fadeIn}
                initial='hidden'
                animate='show'
                src={resizedImage(screenshots.image, 1920)}
                key={screenshots.id}
                alt='carousel_image'
              />
            )}
          </div>
        ))}
    </div>
  );
};
