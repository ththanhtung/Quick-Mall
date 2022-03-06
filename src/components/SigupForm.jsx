import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const SigupForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate('..')
    }
  return (
    <form className="form-sigup" onSubmit={handleSubmit}>
        <div className="container-form-sigup">
            <div className="header-sigup">
                <h1 className='title'>sigup</h1>
                <p className="subtitle">please fill in this form to create an account</p>
            </div>
            <div className="field field-username">
                <label htmlFor="usernameId">username</label>
                <input className='input-text' id='usernameId' type="text" />
            </div>  
            <div className="field field-email">
                <label htmlFor="emailId">email</label>
                <input className='input-text' id='emailId' type="email" />
            </div>  
            <div className="field field-password">
                <label htmlFor="passwordId">password</label>
                <input className='input-text' id='passwordId' type="password" />
            </div>
            <div className="field field-password-confirm">
                <label htmlFor="passwordConfirmId">confirm password</label>
                <input className='input-text' id='passwordConfirmId' type="password" />
            </div>
            <div className="field field-is-admin">
                <label htmlFor="isAdminId">are you an admin?</label>
                <input id='isAdminId' type="checkbox" />
            </div>
            <div className="container-btn-sigup">    
                <button className='btn-sigup' type='submit'>submit</button>
            </div>
        </div>
    </form>
  )
}

export default SigupForm