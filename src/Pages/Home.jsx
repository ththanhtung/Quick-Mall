import React from 'react'
import { Loading, ProductCard } from '../Components'
import style from '../styles/PageLayout/Home.module.scss'
import clsx from 'clsx';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {actions} from '../Store/ProductSlice'

const Home = () => {

  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);
  const products = useSelector(state => state.products.products);
 

  React.useEffect(()=>{getProducts()},[])

  const getProducts = async ()=>{
    try {
      const res = await axios.get(process.env.REACT_APP_API_GET_PRODUCTS)
      dispatch(actions.setProducts(res.data))
      setLoading(false)
    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  }

  if (loading){
    return <Loading/>
  }
  console.log(products);

  return (
    <main >
        <div className={clsx(style.container)}>
          {products.map((product)=>{
            return <ProductCard key={product.id} {...product}/>
          })}
        </div>
    </main>
  )
}

export default React.memo(Home)