import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

export const GameDetail = () => {
  const { screen, game } = useSelector((state) => state.detail);

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
        <div className='gallery'>
          {screen.results &&
            screen.results.map((screen) => (
              <img src={screen.image} key={screen.id} alt='gallery_image' />
            ))}
        </div>
      </div>
    </div>
  );
};
