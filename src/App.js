import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartActions } from './Store/CartSlice';
import { Outlet } from 'react-router-dom';
import {Header} from './Components'
import './styles/style.scss'

function App() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);

  React.useEffect(()=>{
    dispatch(CartActions.getTotal())
  }, [cart])

  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
