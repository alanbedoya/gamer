import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../redux/actions/gamesAction';
import { Game, GameDetail } from '../components';
import { motion } from 'framer-motion';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <motion.div className='gameList'>
      <GameDetail />
      <h2>Popular Games</h2>
      <motion.div className='games'>
        {popular &&
          popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
      </motion.div>
      <h2>New Games</h2>
      <motion.div className='games'>
        {newGames &&
          newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
      </motion.div>
      <h2>Upcoming Games</h2>
      <motion.div className='games'>
        {upcoming &&
          upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
      </motion.div>
    </motion.div>
  );
};

export default Home;
