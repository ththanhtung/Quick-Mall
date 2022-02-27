import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import brandLogo from '../Assets/Images/bag.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className='flex'>
      <div className="header-container flex">
        <div className="branding flex">
          <div className="brand-name">commercial web app</div>
          <img className='brand-logo' src={brandLogo} alt="brand logo" />
        </div>
        <button className='cart-btn' onClick={()=>{navigate('cart')}}>
          <FiShoppingCart className='cart-logo'title='go to cart'/>
        </button>
      </div>
    </header>
  )
}

export default Header