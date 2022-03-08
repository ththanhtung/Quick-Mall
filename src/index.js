import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home, Cart, Login, Sigup, Error} from './Pages'
import store from './Redux'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/sigup' element={<Sigup/>}/>
          <Route path='/products' element={<App/>}>
            <Route index element={<Home/>}/>
            <Route path='cart' element={<Cart/>}/>
          </Route>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

