import { motion } from 'framer-motion';
import { resizedImage } from '../common/utils';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export const GameDetail = ({ pathId }) => {
  const { screenshots, game, isLoading } = useSelector((state) => state.detail);

  const history = useHistory();

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/');
    }
  };

  return (
    <>
      {!isLoading && (
        <motion.div className='card-shadow shadow' onClick={exitDetailHandler}>
          <motion.div className='detail' layoutId={pathId}>
            <motion.div className='stats'>
              <div className='rating'>
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
              </div>
              <motion.div className='info'>
                <h3>Platforms</h3>
                <motion.div className='platforms'>
                  {game.platforms &&
                    game.platforms.map((data) => (
                      <h3 key={data.platform.id}>{data.platform.name}</h3>
                    ))}
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div className='media'>
              <motion.img
                layoutId={`image ${pathId}`}
                src={resizedImage(game.background_image, 640)}
                alt='game_image'
              />
            </motion.div>
            <motion.div className='description'>
              <p>{game.description_raw}</p>
            </motion.div>
            <div className='gallery'>
              {screenshots.results &&
                screenshots.results.map((screenshots) => (
                  <img
                    src={resizedImage(screenshots.image, 640)}
                    key={screenshots.id}
                    alt='gallery_image'
                  />
                ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
