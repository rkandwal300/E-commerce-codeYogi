import React, { createContext, useContext, useEffect, useState } from 'react';
import Header from './files/Header';
import Footer from './files/footer';
import ProductListPage from './files/PdList/ProductListPage';
import ProductDetail from './files/PdDetail/ProductDetail';
import Error from './files/Error';
import NoteState from './Api/noteState';
import { Routes, Route, Link, useParams } from "react-router-dom";
import Loading, { AboutUs , Contact  } from './files/Loading';
import LogIn from './files/SignUp/LogIn';
import LogIn2 from './files/SignUp/LogIn2';
import EasyLogIn from './files/SignUp/LogIn';
import CartP from './files/Cart/CartP';
import LogIn3 from './files/SignUp/LogIn 3';
import axios from 'axios';
import SignUp from './files/SignUp/Sign_Up';
import AuthRoute from './files/SignUp/AuthRoute';
import UserRoute from './files/SignUp/UserRoute';
import Alert from './files/SignUp/alert';
import UserState, { UserContext } from './Api/UserContext';
import Authentication from './files/SignUp/Authentication';



function App() {

 const  {loadingUser } = useContext(UserContext);

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

    if(loadingUser){
      <Loading />
    }

    return (
<div>

{/* <Alert type = 'error' message = ' username or password wrong ' /> */}
<Alert type = 'success' message = ' Profile saved successfully  ' />

<NoteState >
{/* <EasyLogIn /> */}
{/* <LogIn />     // with formik ki help se doobara bnao  */}
<Header    arr={cardCount} />


{/* <SignUp /> */}


{/* <Contact /> */}


<Routes>

<Route path="/products/:id" element={<ProductDetail onAddToCart ={ handleAddToCart}  />} />
<Route path="/Contact_Us" element={<Contact />} />
<Route path="/products/Cart" element={  <CartP data={cart} />} />

<Route path="/signup" element={  <SignUp />} />
<Route path= "/LogIn" element={  <AuthRoute  children ={ <Authentication children = {<LogIn2 />} />   } />   } />




<Route index element={<UserRoute children= { <ProductListPage /> }   />} />




<Route path='/:abc' element={<Error />} />
<Route path ='*'  element={<Error />} />

</Routes>




<Footer />

</NoteState>


    </div>

    )
}

export default App ;






