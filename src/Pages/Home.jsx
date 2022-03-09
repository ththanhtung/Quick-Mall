import React from 'react'
import { Loading, ProductCard } from '../Components'
import style from '../styles/PageLayout/Home.module.scss'
import clsx from 'clsx';

const Home = () => {

  const loading = false;

  if (loading){
    return <Loading/>
  }

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

export default React.memo(Home)