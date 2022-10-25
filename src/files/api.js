// import allData from './DummyData.js'
import axios from 'axios';

// .get("https://myeasykart.codeyogi.io/products/")
let getProduct=()=>{

const allData = axios.get('https://dummyjson.com/products');

  return allData;
}



  

let getSingleProduct = (id) => { 

return axios.get(`https://dummyjson.com/products/`+id);
}

// console.log('single Pro = ',allData);

// for(let i = 0 ; i < allData.length ;i++){
// if(allData[i].id == id){
// // setIndex(i);
// product = i;
// break;

// }
// }

// console.log('index pro = ',product)
// const pro={data:allData[product], index:product}


// // console.log('product = ',pro);
// console.log('single data',allData[product]);

    
    // return pro;
    

//  }

 export default getProduct;
 export {getSingleProduct };