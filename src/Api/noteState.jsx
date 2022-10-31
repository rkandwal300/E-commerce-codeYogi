import React, { useEffect, useState } from 'react'
import NoteContext ,{SingleContext} from './noteContext'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const NoteState = (props) => {

    const [data , setData] = useState([]);

useEffect(()=>{

  
  const p =  axios.get('https://dummyjson.com/products');
  p.then((response)=>{
   console.log('context api data = ' ,response.data)
   setData(response.data)
  }).catch((error)=>{
    console.log(error.message)
  })
    
     
},[])

          
    
  return (
<>
        <NoteContext.Provider value={data}>
            {props.children}
            {/* <APP //> */}
        </NoteContext.Provider>
        </>
  )
}





// const SingleProduct = (props) => {

//   // const [singleData , setSingleData] = useState([]);
//   const {link} = useParams().id;

//    console.log('link = ',link)

// useEffect(()=>{
//   

// const p1 =  axios.get(`https://dummyjson.com/products/`+id);

// p1.then((response)=>{
//  console.log('context singlle Product data data = ' ,response.data)
//  setSingleData(response.data)
// }).catch((error)=>{
//   console.log(error.message)
// })
  
   
// },[])

        
  
// return (
// <>
//       <SingleContext.Provider value={link}>
//           {props.children}
//       </SingleContext.Provider>
//       </>
// )
// }



export default NoteState;
// export {SingleProduct}