import { motion } from 'framer-motion';
import { resizedImage } from '../common/utils';
import { Carousel } from '../components';
import { BsStar, BsStarFill } from 'react-icons/bs';
import {
  SiApple,
  SiGoogleplay,
  SiNintendoswitch,
  SiPlaystation4,
  SiPlaystation,
  SiSteam,
  SiXbox,
} from 'react-icons/si';
import { RiGamepadFill, RiXboxLine } from 'react-icons/ri';
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

  const starRating = () => {
    const star = [];
    const rating = Math.round(game.rating);

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        star.push(<BsStarFill key={i} />);
      } else {
        star.push(<BsStar key={i} />);
      }
    }
    return star;
  };

  const platformLogo = (platform) => {
    switch (platform) {
      case 'Apple' && 'iOS' && 'macOS':
        return <SiApple title={`${platform}`} />;
      case 'Android' && 'Google Play':
        return <SiGoogleplay />;
      case 'Nintendo Switch':
        return <SiNintendoswitch />;
      case 'PC':
        return <SiSteam />;
      case 'PlayStation 4':
        return <SiPlaystation4 size='3.8vw' />;
      case 'PlayStation 5':
        return <SiPlaystation />;
      case 'Xbox One':
        return <RiXboxLine />;
      case 'Xbox Series S/X':
        return <SiXbox />;
      default:
        return <RiGamepadFill />;
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
                <p>Rating: {Math.round(game.rating)}</p>
                {starRating()}
              </div>
              <motion.div className='info'>
                <h3>Platforms</h3>
                <motion.div className='platforms'>
                  {game.platforms &&
                    game.platforms.map((data) => (
                      <ul key={data.platform.id}>
                        <li>
                          <h4>{data.platform.name}</h4>
                          {platformLogo(data.platform.name)}
                        </li>
                      </ul>
                    ))}
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div className='media'>
              <motion.img
                layoutId={`image ${pathId}`}
                src={resizedImage(game.background_image, 1920)}
                alt='game_image'
              />
            </motion.div>
            <motion.div className='description'>
              <p>{game.description_raw}</p>
            </motion.div>
            <Carousel slides={screenshots.imaage} />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
