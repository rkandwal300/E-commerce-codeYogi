import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const products= createContext();


export function getSingleProduct(id) {
    return axios.get("https://myeasykart.codeyogi.io/product/" + id).then(function (response) {
        return response.data;
      }).catch((e)=>{
        console.log(  'error in pr0duct ' )
      });
  }

export const ProductList = ({ query , sortType , sortBy , page } )=>{

    let params = {};
    if(sortType){
        params.sortType = sortType;
    }

    if(sortBy){
        params.sortBy = sortBy
    }

    if( query){
        params.search = query;
    }

    if(page){
        params.page = page ;
    }


    return(  axios.get('https://myeasykart.codeyogi.io/products',{
        params ,
    }).then((response)=>{
    return (response.data)
    }).catch((error)=>{
    console.log('use effect error ',error.message)
    })
    )
}


const ProductState = (props) => {


    const [ product , setProduct] = useState('');
    const [ searchParams , setSearchParams] = useSearchParams()

    const params = Object.fromEntries(searchParams);
    const page = +params.page || 1 ;
    let sort =  params.sort || '' ;
    let  query = params.query ||'';





useEffect(()=>{

    let sortBy , sortType
    if( sort == 'low' ){
        sortBy = 'price'
    } 
    else if( sort == 'high' ){
        sortBy = 'price'
        sortType ='desc'
    }
    
    else if( sort == 'name' ){
        sortBy = 'title'
    }



    ProductList( { query , sortBy , sortType , page} ).then((response)=>{
        
    setProduct(response);
    }).catch((e)=>{
        console.log('product error = ',e)
    })
    
},[ query , sort , page])




    return (
        
    <products.Provider   value = {{ product ,  page}} >
        {props.children}
    </products.Provider>
    )
}

export default ProductState;