import allData from './DummyData.js'


let getProduct=()=>{
    console.log('poora data');
    return allData;
}
let getSingleProduct = (id) => { 

    
let product ;

for(let i = 0 ; i < allData.length ;i++){
if(allData[i].id == id){
// setIndex(i);
product = i;
break;

}
}
const pro={data:allData[product], index:product, length:allData.length}


// console.log('product = ',pro);
// console.log('single data',allData[product]);

    
    return pro;
    

 }

 export default getProduct;
 export {getSingleProduct };