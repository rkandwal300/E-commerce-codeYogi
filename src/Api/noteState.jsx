import React, { useEffect, useState } from 'react'
import NoteContext ,{SingleContext} from './noteContext'
import axios from 'axios'
// import ProductDetail from '../files/PdDetail/ProductDetail';

const NoteState = (props) => {

    const [data , setData] = useState([]);

    useEffect(()=>{

  
  const p =  axios.get('https://dummyjson.com/products');
  p.then((response)=>{
  //  console.log('context api data = ' ,response.data)
  setData(response.data)
  }).catch((error)=>{
    console.log(error.message)
  })
    

},[])

          
    
  return (
<>
        <NoteContext.Provider value={data}>
            {props.children}
        </NoteContext.Provider>
        </>
  )
}





const SingleProductContext = (props) => {


  const [productId, setProductId] = useState(0);
  const [productresponse, setProductResponse] = useState([]);

  let link= 'https://dummyjson.com/products/'+ productId; 
  console.log('link = ', typeof(link))

  useEffect(() => {
    


    // const p = axios.get('https://dummyjson.com/products/5');
     const p =  axios.get('https://dummyjson.com/products/'+ productId);
    p.then((response) => {

      // console.log('context single Product data data = ', response.data)

      setProductResponse(response.data);
    }).catch(() => {
      console.log('404 error sale');
    })


  }, [])

  console.log (' pro id  id = ',productId)

  let data2 = {
    productresponse,
    setProductId
  }


  // console.log(' data 2 type = ', typeof (data2))

return (
<>
      <SingleContext.Provider value={data2 }>
          {props.children}
      </SingleContext.Provider>
      </>
)
}



export default NoteState;
export { SingleProductContext }

