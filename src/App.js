import './App.css';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { authListener} from "./utils/firebase.utils";
import { setCurrentUser } from './store/user/user-action';


import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/home';
import NavBar from './routes/Navigation Bar/nav-bar';
import Authentication from './routes/Authentication/authentication';
import Shop from './routes/Shop/shop';
import Checkout from './routes/Checkout Page/checkout';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = authListener((user) => {
            dispatch(setCurrentUser(user));
        })
        
        return unsubscribe;
    }, [dispatch]);

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
