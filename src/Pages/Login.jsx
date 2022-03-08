import React from 'react'
import { LoginForm } from '../Components'
import styles from '../styles/PageLayout/Login.module.scss'
import clsx from 'clsx';

const Login = () => {
  return (
    <main>
      <div className={clsx(styles.containerLogin)}>
        <LoginForm/>
      </div>
    </main>
  )
}

export default React.memo(Login)