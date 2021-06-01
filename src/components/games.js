import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadDetail } from '../redux/actions/detailsAction';
import { resizedImage } from '../common/utils';

export const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(loadDetail(id));
  };

  return (
    <motion.div className='styledGame' onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={resizedImage(image, 420)} alt={name} />
      </Link>
    </motion.div>
  );
};
