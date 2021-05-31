import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

export const GameDetail = () => {
  const { screenshots, game } = useSelector((state) => state.detail);

  return (
    <div className='card-shadow'>
      <div className='detail'>
        <div className='stats'>
          <div className='rating'>
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className='info'>
            <h3>Platforms</h3>
            <div className='platforms'>
              {game.platform &&
                game.platforms.map((data) => (
                  <h3 key={data.platform.id}>{data.platform.name}</h3>
                ))}
            </div>
          </div>
        </div>
        <div className='media'>
          <img src={game.background_image} alt='game_image' />
        </div>
        <div className='description'>
          <p>{game.description_raw}</p>
        </div>
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
      </div>
    </div>
  );
};
