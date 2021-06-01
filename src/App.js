import Home from './pages/home';
import { Route } from 'react-router-dom';
import './sass/main.scss';

function App() {
  return (
    <div className='App'>
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
