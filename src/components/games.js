import { motion } from 'framer-motion';

export const Game = ({ name, released, image }) => {
  return (
    <motion.div className='styledGame'>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </motion.div>
  );
};
