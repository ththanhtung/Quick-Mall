import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { BiLogOutCircle } from "react-icons/bi";
import brandLogo from '../Assets/Images/bag.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CartActions } from '../Store/CartSlice';

const Header = () => {
  const navigate = useNavigate();
 
  const totalProducts = useSelector(state => state.cart.totalProducts)


  return (
    <header className='flex'>
      <div className="header-container flex">
        <div className="branding flex">
          <h1 className="brand-name">commercial web app.</h1>
          <button 
            className='btn-brand-name' 
            onClick={()=>{navigate('/products')}}
            title='back to products page'
          >
            <img className='brand-logo' src={brandLogo} alt="brand logo" />
          </button>
        </div>
        <div className="container-btn">
          <div className="container-btn1">
            <button className='logout-btn' onClick={()=>{navigate('/')}}>
              <BiLogOutCircle className='icon logout-icon'title='log out'/>
            </button>
          </div>
          <div className="container-btn2">
            <button className='cart-btn' onClick={()=>{navigate('cart')}}>
              <FiShoppingCart className='icon cart-icon'title='go to cart'/>
            </button>
            <div className="amount-container" title='number of product(s) in cart'>
              <h5 className='products-amount'>{totalProducts}</h5>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default React.memo(Header)