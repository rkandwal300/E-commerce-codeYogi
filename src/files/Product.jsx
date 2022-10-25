import React from 'react';
// import allData from './DummyData';

import { Link } from 'react-router-dom';




function Product(data) {

  return (


    <>

<Link to={'/products/' + data.id}>
      <div className="m-[30px] rounded-2xl shadow-md  shadow-slate-400 hover:bg-slate-100 p-[20px] cursor-pointer  w-[350px]">

        <div className="w-[300px] bg-cover bg-center  " >
          <img className=" w-full  object-cover" src={data.images[1]}  alt={data.thumbnail} />
        </div>

        <div className="text-m mt-[15px] font-semibold text-gray-500 " >  {data.title}
        </div>
        <div className="text-xl mt-[5px] font-bold text-gray-500 "> {data.category} </div>
        <div ><i className="fa fa-star text-red-500"></i>  <i className="fa fa-star text-red-500"></i> <i className="fa fa-star text-red-500"></i> <i className="fa fa-star-0 text-red-500"></i> <i className="fa fa-star-o text-red-500"></i>  </div>
        <div className=" text-m mt-[7px] font-semibold text-gray-500 " > $ {data.price}</div>


        
        {/* <Link className="px-[5px] ml-[190px] py-[10px] rounded-xl bg-red-200" to={"/products/" + id} > View Detail</Link> */}




      </div>

</Link>


    </>

  );



}

export default Product;




