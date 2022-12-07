import React, { createContext, useContext, useEffect, useState } from "react";
import Header from "./files/Header";
import Footer from "./files/footer";
import ProductListPage from "./files/PdList/ProductListPage";
import ProductDetail from "./files/PdDetail/ProductDetail";
import Error from "./files/Error";
import { Routes, Route } from "react-router-dom";
import Loading, { Contact } from "./files/Loading";
import LogIn2 from "./files/SignUp/LogIn2";
import CartP from "./files/Cart/CartP";
import SignUp from "./files/SignUp/Sign_Up";
import AuthRoute from "./files/SignUp/AuthRoute";
import UserRoute from "./files/SignUp/UserRoute";
import Alert from "./files/SignUp/alert";
import UserState, { UserContext } from "./Api/UserContext";
import Authentication from "./files/SignUp/Authentication";
import CartState from './Api/CartContext';
import AlertState from "./Api/AlertContext";
import ProductState from "./Api/Sort-Search";

function App() {
 

  return (
    <div>
  
      <AlertState>
      <UserState>
      <ProductState >
      <CartState>
        {/* <EasyLogIn /> */}
        {/* <LogIn />     // with formik ki help se doobara bnao  */}
        <Header />


        {/* <Contact /> */}

        <Routes>
          <Route
            path="/products/:id"
            element={<ProductDetail  />}
          />
          <Route path="/Contact_Us" element={<Contact />} />
          <Route path="/products/Cart" element={<CartP />} />

          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/LogIn"
            element={
              <AuthRoute children={<Authentication children={<LogIn2 />} />} children2 ={ <SignUp />} />
            }
          />

          {/* <Route index element={<UserRoute children={<ProductListPage />} />} /> */}

          <Route index element={<ProductListPage />} />

          <Route path="/:abc" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </CartState>
      </ProductState>
      </UserState>
        </AlertState>

    </div>
  );
}

export default App;
