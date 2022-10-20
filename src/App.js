import './App.css';
import Cart from './Components/Cart/Cart';
import AllCategories from './Components/Filter/AllCategories';
import Toys from './Components/ToysComponents/Toys';

function App() {
  return (
    <div className="App">
    <div className='block'>
      <AllCategories />
      <Cart />
    </div>
    <div className='block'>
      <Toys />
    </div>
    </div>
  );
}

export default App;
