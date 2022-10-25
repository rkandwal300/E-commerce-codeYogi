import React from 'React';
import ProductList from './ProductList';

let ProductListPage=()=>{

    return(<>
    <div className='h-fit w-full bg-slate-100  ' >

    <div   className=' h-[80px] pb-[10px]  w-full bg-slate-300 ' >
   <div className=' mb-[10px]'  >
    <img className="w-[200px] ml-[80px] p-[20px] " src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"  height='60px'  /> </div>
    </div>


<div className='  w-[94%] ml-[3%] rounded-xl shadow-md shadow-black mt-[50px] bg-white flex justify-center flex-wrap  '>

                <div>  
                    <input type='text' placeholder='Search here...' className=''  />
                    <slelct ></slelct>
                </div>


    <ProductList />

    </div>




    
<div className="h-[70px] flex bg-gray-500 w-full mt-[150px]  py-[20px]  ">
        <div className="flex justify-between  w-[70%] mx-[15%]  ">

          <div className="text-slate-50  "   > COPYRIGHT @ | CODEYOGI   </div>

          <div className="text-slate-50   ] "  >POWERED BY CODEYOGI </div>
        </div>




      </div> 

    </div>





    

    </>);
}

export default ProductListPage;