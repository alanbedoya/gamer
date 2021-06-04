import Home from './pages/home';
import { Nav, Footer } from './components';
import { Route } from 'react-router-dom';
import './sass/main.scss';

function App() {
  return (
    <div className='App'>
      <Route path={['/game/:id', '/']}>
        <Nav />
        <Home />
        <Footer />
      </Route>
    </div>
  );
}

export default App;
