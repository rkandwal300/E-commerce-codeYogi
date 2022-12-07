import React, { useContext, useEffect, useState } from "react";
import { AiOutlineCheckCircle, AiFillCheckCircle , AiFillInfoCircle } from "react-icons/ai";
import { MdOutlineDangerous  } from "react-icons/md";
import { Link } from "react-router-dom";
import { AlertContext } from "../../Api/AlertContext";

const Alert = () => {

  

  const {alert , setalert}  = useContext(AlertContext)


 

  const  [hide , setHide ] = useState ( );



  const Timeout =()=>{
    setHide(true)
  }


  const handleHide = ()=>{
    setHide(true)
  }


  useEffect(()=>{
    const AlertHidden = alert.hidden;
    setHide(AlertHidden)
    if(AlertHidden  == false){
  const myTimeout = setTimeout(Timeout, 3 * 1000);
return ()=>{

  clearTimeout(myTimeout);
}}


},[alert.hidden ])



    let  text ;
    let icon  ,content;

    switch(alert.type){
      case "success" :
      content= 'A simple alert with text and a right icon   '
      console.log('sucesshehe  ');
      text = 'text-teal-600';
      icon = <AiFillCheckCircle />
      break ;
      
      case 'add-cart':
        console.log('cart added');
        // message = 'A simple alert with text and a right icon   '
        text = 'text-teal-600';
        content = ( alert.message +' has been added to your cart. ')
        icon = <AiFillCheckCircle/>
        break ;
        
        case 'error':
          console.log('error occurred');
          content= alert.message
        text = 'text-red-500';
        icon = <AiOutlineCheckCircle />
        break ;


    }

if(hide == false){

    return (
<>
<div className={"relative py-5 pl-4 pr-10 leading-normal flex justify-between items-center bg-gray-200  border-t-4 border-red-600    " } role="alert">
<div className="flex justify-center items-center  " >

<div className= {`mr-2 text-xl font-bold text-teal-500 ${text} `  }>
{icon}
</div>

  <p className="text-lg">  {content}  </p>
  </div>
  <span className="absolute inset-y-0 right-0 flex items-center mr-5">

<div    onClick={ handleHide }>
  {alert.type == 'add-cart' ? ( <Link to="/products/Cart" >  <div className=" bg-red-500 text-lg font-semibold text-white py-2   px-4 rounded-lg shadow-lg    "  > View Cart  </div></Link>
  ):(
    <div className=""  > x</div>
  )}

</div>

  </span>
</div>
</>
    );

}
}


export default Alert