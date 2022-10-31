import React from'react';

let ProductDetail=()=>{

    return(
        <>
        <div className='h-100vh w-full justify-center  '>
        <div className=" ml-[3%] mr-[5%] mt-[50px] flex flex-wrap shadow-2xl   justify-center w-[95%] h-[900px] ">

            <div  className="w-[45%] mt-[50px] ml-[40px] mr-[50px] "  >  <img src="https://cdn.discordapp.com/attachments/992343608189526056/1002832090527711283/mug-white-4.jpeg" width='100%' />
        </div>


                            <div className=" sm:w-[48%]  ml-[20px] lg:mt-[80px]">  
                                <h1  className="font-medium  mb-[40px] mt-[20px] text-5xl"> Black Printed Coffee Mug</h1>
                                <span className="font-medium text-green-800  mb-[50px] text-4xl">$15.00</span>
                                <p  className="mt-[40px] font-light"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nam sapiente ipsa nobis quasi, ipsum totam esse impedit expedita ducimus ea minima rerum delectus nesciunt perferendis provident magni, ratione molestiae!</p>
                        

                            
                            <div className="flex flex-nowrap mt-[50px]">

                            <div className="h-[50px] w-[50px] pl-[10px] pt-[5px]  mr-[30px] mt-[10px] text-xl  border-[2px] border-black">1
                            </div>
                            
                            <button  className="py-[10px] w-[250px]  h-[60px] mr-[30px] px-[40px] text-slate-50 rounded-xl bg-red-500 text-xl "> ADD TO THE CART</button>
                            </div>
                    </div>

    </div>

        </div>

        </>
    );
}

export default ProductDetail;