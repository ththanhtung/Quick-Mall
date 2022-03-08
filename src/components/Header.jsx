import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { BiLogOutCircle } from "react-icons/bi";
import brandLogo from '../Assets/Images/bag.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className='flex'>
      <div className="header-container flex">
        <div className="branding flex">
          <h1 className="brand-name">commercial web app</h1>
          <button className='btn-brand-name' onClick={()=>{navigate('/products')}}>
            <img className='brand-logo' src={brandLogo} alt="brand logo" />
          </button>
        </div>
        <div className="container-btn">
          <button className='logout-btn' onClick={()=>{navigate('/')}}>
            <BiLogOutCircle className='icon logout-icon'title='logout'/>
          </button>
          <button className='cart-btn' onClick={()=>{navigate('cart')}}>
            <FiShoppingCart className='icon cart-icon'title='go to cart'/>
          </button>
        </div>
      </div>
    </header>
  )
}

export default React.memo(Header)