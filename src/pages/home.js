import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../redux/actions/gamesAction';
import { Game, GameDetail, ScrollTop } from '../components';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { fadeIn } from '../animation';

const Home = () => {
  const location = useLocation();

  const pathId = location.pathname.split('/')[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <motion.div
      className='gameList'
      variants={fadeIn}
      initial='hidden'
      animate='show'
    >
      <AnimateSharedLayout type='crossfade'>
        <AnimatePresence>
          {pathId && (
            <motion.div exit={{ opacity: -1 }}>
              <GameDetail pathId={pathId} />
            </motion.div>
          )}
        </AnimatePresence>
        <ScrollTop />
        {searched.length ? (
          <motion.div
            className='searched'
            variants={fadeIn}
            initial='hidden'
            animate='show'
          >
            <h2>Searched Games</h2>
            <motion.div className='games'>
              {searched &&
                searched.map((game) => (
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
        ) : null}
        {searched.length ? null : (
          <>
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
          </>
        )}
      </AnimateSharedLayout>
    </motion.div>
  );
};

export default Home;
