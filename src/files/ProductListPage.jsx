import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import Error from './Error'

// import allData from './DummyData.js';
import getProduct from './api.js'

let ProductListPage = () => {



  


  const [product ,setProduct] = useState([]);
  const [ip, setIp] = useState('');
  const [ sort,setSort] = useState("default");


   useEffect(()=>{
    const allData = getProduct();
    
allData.then((response)=>{
  console.log('data aa agya ',response.data.products);
  
  setProduct( response.data.products);
})
     
   },[]);

   let data2 = product ;

 let data = sort;
 console.log('data before = ',product);



  data = product.filter((elem, index) => {

    let tit = elem.title.toLowerCase();
    let txt = ip.toLowerCase();
    console.log(txt);
    return tit.indexOf(txt) != -1;
  });

  //  console.log('data before = ',data);


  switch (sort) {

    case "default":
      data = product.sort((x,y)=>{
        return x.id - y.id;
      })

    break;

    case "high":
      data = product.sort((x,y)=>{
        return x.price - y.price;
     });
   
    break;

    case "low":
      data = product.sort((x,y)=>{
        return y.price-x.price;
     });

    break;

    case "name":
     data = product.sort((x,y)=>{
      return (x.title < y.title ? -1 : 1);
     });

    break;
    }


  let inputt = (event) => { setIp(event.target.value); }

  let select=(event)=>{ setSort(event.target.value); }
  



  return (data &&( <>
    <div className='h-fit w-full bg-slate-100  ' >

   


      <div className='  w-[94%] ml-[3%] rounded-xl shadow-md shadow-black mt-[50px] bg-white  flex justify-center flex-wrap  '>

        <div className='h-[100px] mt-[20px]  w-full flex  flex-col justify-center md:items-end lg:mr-[170px] md:mr-[150px] sm:items-center mr-[50px] ml-[50px] '>


          <input className='h-[40px] w-[300px] rounded-xl text-center tracking-wide text-xl shadow-lg shadow-slate-300   active:bg-slate-300   border-2 border-black     ' type='text' placeholder='Search Here.....' autoComplete='off' onChange={inputt} />

          <select  className='h-[40px] w-[300px]  rounded-xl border-2 border-slate-500  px-[10px] text-lg  mt-4 '  onChange={select} >
            <option  defaultValue ='default' > Default Sorting     </option>
            <option  value='low'    > High To Low  </option>
            <option  value='high'   > Low To High  </option>
            <option  value='name'   > Sort By Name  </option>
          </select>


        </div>
      
        {data.length > 0 && <ProductList props={data} />}
        {data.length == 0 && <Error />}

      </div>





      <div className="h-[70px] flex bg-gray-500 w-full mt-[150px]  py-[20px]  ">
        <div className="flex justify-between  w-[70%] mx-[15%]  ">

          <div className="text-slate-50  "   > COPYRIGHT @ | CODEYOGI   </div>

          <div className="text-slate-50   ] "  >POWERED BY CODEYOGI </div>
        </div>




      </div>

    </div>







  </>))
}

export default ProductListPage;