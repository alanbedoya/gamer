import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadGames } from './redux/actions/gamesAction';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });
  return (
    <div className='App'>
      <h1>Hello Gamer</h1>
    </div>
  );
}

export default App;
