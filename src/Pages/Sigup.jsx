import React from 'react'
import { SigupForm } from '../Components'
import clsx from 'clsx'
import styles from '../styles/PageLayout/Sigup.module.scss'

const Sigup = () => {
    return (
      <main>
        <div className={clsx(styles.containerSigup)}>
          <SigupForm/>
        </div>
      </main>
    )
  }
  
  export default Sigup