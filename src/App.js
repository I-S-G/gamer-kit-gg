import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/home';
import NavBar from './routes/Navigation Bar/nav-bar';
import Authentication from './routes/Authentication/authentication';
import Shop from './routes/Shop/shop';
import Checkout from './routes/Checkout Page/checkout';


function App() {
  return (
   <Routes>
      <Route element = {<NavBar />} path='/' >
        <Route element = {<Home />} index />
        <Route element = {<Authentication />} path='authentication' />
        <Route element = {<Shop />} path='shop/*' />
        <Route element = {<Checkout />} path = 'checkout' />
      </Route>
   </Routes>
  );
}

export default App;
