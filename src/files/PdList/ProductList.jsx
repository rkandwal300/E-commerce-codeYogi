import React from 'react';
import Product from './Product';

let ProductList=({props})=>{

    const data=props;

    return (
        <>
        <div className='  flex flex-wrap   justify-center'> 
        {
            data.map((element,value)=>{
                return(  <Product key={element.id} {...element} /> );
            })
        }
        </div>

        </>
    );
}

export default ProductList;