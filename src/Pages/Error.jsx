import React from 'react'
import clsx from 'clsx'
import styles from '../styles/PageLayout/Error.module.scss'
import {BiSad} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <main className={clsx(styles.mainContainer)}>
        <div className={clsx(styles.container)}>
            <h1 className={clsx(styles.h1Error)}>page not found</h1>
            <Link className={clsx(styles.aError)} to='/'>back to main page</Link>
            <BiSad className={clsx(styles.iconSad)}/>
        </div>
    </main>
  )
}

export default React.memo(Error)