
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import SingleRestaurant from './Components/SingleRestaurant';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/restaurant/:restaurantId' element={<SingleRestaurant/>}/>
     </Routes>
    </div>
  );
}

export default App;
