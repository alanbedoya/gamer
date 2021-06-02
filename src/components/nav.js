import { motion } from 'framer-motion';
import { FaDiceD20 } from 'react-icons/fa';

export const Nav = () => {
  return (
    <motion.nav className='styledNav'>
      <motion.div className='logo'>
        <FaDiceD20 />
        <h1>Gamer</h1>
      </motion.div>
      <div className='search'>
        <input type='text' />
        <button>Search</button>
      </div>
    </motion.nav>
  );
};
