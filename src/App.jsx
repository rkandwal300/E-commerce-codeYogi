import React from 'react';
import Header from './files/Header';
import Footer from './files/footer';
import ProductListPage from './files/ProductListPage';
import ProductDetail from './files/ProductDetail';
import Error from './files/Error';

import { Routes, Route, Link, useParams } from "react-router-dom";

function App() {

  return (
<div>



<Header />


<Routes>

<Route path="/products/:id" element={<ProductDetail />} />


<Route index element={<ProductListPage />} />
<Route path='/:abc' element={<Error />} />
<Route element={<Error />} />

</Routes>


{/* 

<Routes>

    <Route  indexpath='/'  element={ProductListPage}  />

    
    <Route path='/product:id'  element={ProductDetail}  />
     

</Routes> */}

{/* <ProductListPage /> */}


{/* <ProductDetail /> */}



<Footer />
<Error />

    </div>
   
    )
}

export default App
