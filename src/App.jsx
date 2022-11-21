import React, { useState } from 'react';
import Header from './files/Header';
import Footer from './files/footer';
import ProductListPage from './files/PdList/ProductListPage';
import ProductDetail from './files/PdDetail/ProductDetail';
import Error from './files/Error';
import NoteState, { SingleProductContext } from './Api/noteState';
import { Routes, Route, Link, useParams } from "react-router-dom";
import { AboutUs , Contact  } from './files/Loading';
import LogIn from './files/SignUp/LogIn';
import LogIn2 from './files/SignUp/LogIn2';
import EasyLogIn from './files/SignUp/LogIn';
import CartP from './files/Cart/CartP';

function App() {

  const storageCartString = localStorage.getItem('cart-items');
  const storageCart       = JSON.parse(storageCartString) || {};




  const [ cart , setCart ] = useState(storageCart);


    const handleAddToCart =( proId,count)=>{
      let oldcount = cart[proId] || 0;

      let cartObj = {...cart , [proId]:oldcount + count };


      const jsonCart = JSON.stringify(cartObj)
      localStorage.setItem('cart-items' ,jsonCart)


      setCart(cartObj);
      console.log('cart =  ',cart );


    }

    const cardCount =  Object.keys(cart).length;

    return (
<div>



<NoteState >
{/* <EasyLogIn /> */}
{/* <LogIn />     // with formik ki help se doobara bnao  */}
<Header    arr={cardCount} />

{/* <Contact /> */}


<Routes>

<Route path="/products/:id" element={<ProductDetail onAddToCart ={ handleAddToCart}  />} />
<Route path="/Contact_Us" element={<Contact />} />
<Route path="/products/Cart" element={  <CartP data={cart} />} />


{/* <Route path="/products/Cart" element={ <CartPage data={cart} />} /> */}

<Route index element={<ProductListPage />} />
<Route path='/:abc' element={<Error />} />
<Route path ='*'  element={<Error />} />

</Routes>




<Footer />

</NoteState>

    </div>

    )
}

export default App ;






