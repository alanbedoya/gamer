import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { loadDetail } from '../redux/actions/detailsAction';

export const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  return (
    <motion.div className='styledGame' onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </motion.div>
  );
};
