import React from 'react';
import Product from './Product';
import allData from './DummyData.js';

let ProductList=()=>{

    const data=allData;

    return (
        <>
        <div className='  flex flex-wrap'> 
        {
            data.map((element,value)=>{
                return(
                    <Product  title={element.title}  photo={element.photo} Price={element.Price} />
                );
            })

        }
        </div>

        </>
    );
}

export default ProductList;