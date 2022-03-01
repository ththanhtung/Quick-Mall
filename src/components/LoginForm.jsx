import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const navigate = useNavigate();
  return (
    <form className="form-login">
        <div className="container-form-login">
            <h1 className="title-login">login</h1>
            {/* <div className="container-btn-switch-login-sigup">
                <button className="btn-switch-login active">login</button>
                <button className="btn-switch-sigup">sigup</button>
            </div> */}
            <div className="field field-username">
                <label htmlFor="usernameId">username</label>
                <input id='usernameId' type="text" />
            </div>
            <div className="field field-password">
                <label htmlFor="passwordId">password</label>
                <input id='passwordId' type="password" />
            </div>
            <button className="btn-login" onClick={()=>{navigate('products')}}>login</button>
            <div className="container-sigup-link">
                <span>not a member?</span>
                <Link to='../sigup'>sigup now!</Link>
            </div>
        </div>
    </form>
  )
}

export default LoginForm