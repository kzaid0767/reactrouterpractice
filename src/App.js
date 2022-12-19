import './App.css';
import Home from './Home';
import Products from './Products';
import Details from './Details';
import {Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <nav>
        <Link className='links' to={'/'}>Home</Link>
        <Link className='links' to={'/products'}>Products</Link>
      </nav>
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:Id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
