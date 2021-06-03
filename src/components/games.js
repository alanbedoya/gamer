import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadDetail } from '../redux/actions/detailsAction';
import { resizedImage } from '../common/utils';
import { popup } from '../animation';

export const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(loadDetail(id));
  };

  const stringPathId = id.toString();

  return (
    <motion.div
      className='styledGame'
      variants={popup}
      initial='hidden'
      animate='show'
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={resizedImage(image, 1280)}
          alt={name}
        />
      </Link>
    </motion.div>
  );
};
