
import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';
import ProductDetail from '../files/PdDetail/ProductDetail';

export const Context = createContext();

const SingleData = (props) => {


  const [productId, setProductId] = useState('');
  const [productresponse, setProductResponse] = useState([]);

  console.log('link = ')

  useEffect(() => {


    const p = axios.get('https://dummyjson.com/products/5');
    p.then((response) => {

      console.log('context single Product data data = ', response.data)

      setProductResponse(response.data);
    }).catch(() => {
      console.log('404 error sale');
    })


  }, [])

  let data2 = {
    productresponse,
    setProductId
  }


  console.log(' data 2 type = ', typeof (data2))

  return (
    <>
      <Context.Provider value={data2}>
        {/* <ProductDetail /> */}
        {props.children}
      </Context.Provider>
    </>
  )
}

export default SingleData;