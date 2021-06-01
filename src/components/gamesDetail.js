import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

export const GameDetail = () => {
  const { screenshots, game, isLoading } = useSelector((state) => state.detail);

  return (
    <>
      {!isLoading && (
        <motion.div className='card-shadow'>
          <motion.div className='detail'>
            <motion.div className='stats'>
              <div className='rating'>
                <h3>{game.name}</h3>
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
              <img src={game.background_image} alt='game_image' />
            </motion.div>
            <motion.div className='description'>
              <p>{game.description_raw}</p>
            </motion.div>
            <div className='gallery'>
              {screenshots.results &&
                screenshots.results.map((screenshots) => (
                  <img
                    src={screenshots.image}
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
