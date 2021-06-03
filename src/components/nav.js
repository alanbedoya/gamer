import { motion } from 'framer-motion';
import { FaDiceD20 } from 'react-icons/fa';
import { useState } from 'react';
import { fetchSearch } from '../redux/actions/gamesAction';
import { useDispatch } from 'react-redux';

export const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput('');
  };

  const clearSearched = () => {
    dispatch({ type: 'CLEAR_SEARCHED' });
  };

  return (
    <motion.nav className='styledNav'>
      <motion.div className='logo'>
        <FaDiceD20 onClick={clearSearched} />
        <h1>Gamer</h1>
      </motion.div>
      <form className='search'>
        <input value={textInput} onChange={inputHandler} type='text' />
        <button onClick={submitSearch} type='submit'>
          Search
        </button>
      </form>
    </motion.nav>
  );
};
