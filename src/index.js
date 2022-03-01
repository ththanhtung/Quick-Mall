import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home, Cart, Login} from './Pages'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='cart' element={<Cart/>}/>
        </Route>
        <Route path='login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

