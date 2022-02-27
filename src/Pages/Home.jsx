import React from 'react'
import { ProductCard } from '../Components'
import style from '../styles/PageLayout/Home.module.scss'
import clsx from 'clsx';

const Home = () => {
  return (
    <main >
        <div className={clsx(style.container)}>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
    </main>
  )
}

export default Home