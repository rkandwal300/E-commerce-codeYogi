import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { AiFillQqSquare } from 'react-icons/ai';
import { AlertContext } from './AlertContext';
import { UserContext } from './UserContext';

export const cartListContext = createContext();

export const getCart = ()=>{
    return( axios.get("https://myeasykart.codeyogi.io/carts", {
    headers: {
        Authorization: localStorage.getItem("logIn_Token"),
    },
    })
    .then(function (response) {
            return response.data;
    })
    )

}
// {1: 3, 5: 9, 7: 13}
export function saveCart(cart) {
    console.log('cart save cat  = ',cart)
    return (axios.post(
        "https://myeasykart.codeyogi.io/carts",
        { data: cart },
        {
        headers: {
            Authorization: localStorage.getItem("logIn_Token"),
        },
        }
    )
    .then(function (response) {
        return response.data;
    }).catch((e)=>{
        console.log(' eoor in saving the cart to api',e)
    })
    )
}

export const  cartContext   = (ids) =>{
    const commaSeperatedIds = ids.join();
    return (
    axios.get("https://myeasykart.codeyogi.io/products/bulk", {
        params: {
        ids: commaSeperatedIds,
        },
    }))
    .then((response)=>{
        return response.data 
    })
    .catch((e)=>{
        console.log(' single product error = ',e)
    })
}



const CartState = (props)=>{
    const { alert , setalert} = useContext(AlertContext);

    
    const user = useContext(UserContext);
    
    // const amt = {amount : 0}

    const [data, setData] = useState([]);  // DATA 
    const [CartCount , setCartCount] = useState(0);  //total cart quANTITY 
    const [UserData , setUserData] = useState();  // user logged in or not 
    const [CartDetail , setCartDetail ] = useState();  // {id : quantity , 1:22 ,2,33}
    const [btn , setBtn ] = useState(false);
    const  [ itemQuantity ,setItemQuantity ] = useState()
    const [ OldAmount ,setOldAmount ] = useState(0) ; // subtotal
    const [ NewAmount , setNewAmount ] = useState([]) ; // subtotal



        const  cartQuantity =(prop)=>{ 
            
                setCartCount(
                    Object.values(prop).reduce((accumulator, currentValue) =>  accumulator + currentValue))
        }


            



        const cartQuantityObj =(prop)=>{
        console.log('prop',prop);
        prop.reduce(
            (m,cartItem)=>({...m , [cartItem.product.id] : cartItem.quantity}),{} 
            );}


            const setCartData = (props) =>{
                cartContext(Object.keys(props)).then((products)=>{
                    const savedData = products.map((p)=>({
                    product :p,
                    quantity : props[p.id]
                    }));
                    setData(savedData);
                })
            }


    useEffect(()=>{
        if(!user.isLoggedIn) {
            const storageCartString = localStorage.getItem("cart-items") ;
            const storageCart = JSON.parse(storageCartString) || {};
            const length = Object.keys(storageCart).length;

            if(length >0){

            setCartDetail(storageCart);
            
            cartQuantity (storageCart);

            setCartData(storageCart);

            }

        cartQuantity (storageCart); 
    }
    else{

        const storageCartString = localStorage.getItem("cart-items") ;
        const storageCart = JSON.parse(storageCartString) || {};

        let  localData ;
        
        if(storageCart){

            let dataSet = Object.entries(storageCart)
        const  localCart= cartContext(dataSet);
            localData = {...localCart }
            localStorage.removeItem("cart-items");

            console.log ( ' local cart = , ',localData)
        }
        
    
        getCart().then((response)=>{
            setData (response);

            console.log(' set data resp effect = ',response)
            let  obj = cartQuantityObj (response);

            console.log (' obk = ',obj)


            setCartDetail(obj);
            cartQuantity (obj);
            cartQuantity(obj);
            return(response);
            }).catch((e)=>{
                console.log('no products in  cart ',e)
                const error = alert ;

                error.message = 'There are no  products in cart ';
                error.type = 'error';
                alert.hidden = false ;
                setalert(error);
            })
                
    }
    

    },[user.isLoggedIn]);





    const onAddToCart = (proId, count) => {
        if(!user.isLoggedIn ){

            console.log('id , count = ',proId , count )
            let oldcount = 0 ;
            if(CartDetail){
            oldcount = CartDetail[proId] || 0;
            }
            let cartObj = { ...CartDetail, [proId]: oldcount + count };
            console.log('cart obj maopp = ',cartObj)

            const jsonCart = JSON.stringify(cartObj)
        
            localStorage.setItem("cart-items", jsonCart);

            setCartDetail (cartObj)

            return cartObj

        }
        else{

            let  obj = cartQuantityObj (data);
            setCartDetail(obj);
            const storageCartString = localStorage.getItem("cart-items") ;
            const storageCart = JSON.parse(storageCartString) || {};
            
            if(storageCart){
                // const localCart= cartQuantityObj (storageCart);
                obj = {...storageCart , ...obj  }
                localStorage.removeItem("cart-items");
            }
            
            
            obj = { ...obj  }
            
            let oldcount = obj[proId] || 0;
            
            let cartObj = { ...CartDetail, [proId]: oldcount + count };

            console.log('cart obj = ',cartObj)
            setCartDetail (cartObj);
            cartQuantity (cartObj);

            saveCart(cartObj).then((response)=>{
                return(response)
            }).catch((e)=>{console.log('error in api sender ',e)})

            getCart().then((response)=>{
                setData (response);
                return(response);
                })
        }
    };

    const handleDeleteCartItem =(id)=>{
        console.log ( '  alert  cart item deleted ' );
        console.log ( 'needed to add local storage data  to api ')

        let tempData = {...CartDetail } ;
        delete(tempData[id])  ;
        console.log(' temdata = ',tempData)

        if(!user.isLoggedIn ){

            const jsonCart = JSON.stringify(tempData)
        
            localStorage.setItem("cart-items", jsonCart);

        }

        else {

        setCartDetail(tempData);

        saveCart(tempData).then((response)=>{
            console.log (' alert cart added ')
            return(response)
        }).catch((e)=>{console.log('error in api sender ',e)})

        getCart().then((response)=>{
            setData (response);
            return(response);
            })
        }

    }


    
const HandleQuantity = ( id , quantity )=>{
    
    let cartObj = {...CartDetail , [id]: quantity };
    setItemQuantity (cartObj);
    setBtn(true)
    }


    const updateQuantity = ()=>{
        setBtn(false);
        setCartDetail(itemQuantity);

        if(!user.isLoggedIn) {
            
            const jsonCart = JSON.stringify( itemQuantity )
        
            localStorage.setItem("cart-items", jsonCart);

        }
        else{

        saveCart(itemQuantity).then((response)=>{
            return(response)
        }).catch((e)=>{console.log('error in api sender ',e)})

        getCart().then((response)=>{
            setData (response);
            return(response);
            })
        }
        }
        



    // const TotalAmount =()=>{

    //     const Temp =   data.map((val)=>{
    //         console.log(' data = ',data)
    //         console.log(' data price , data quantity = ',val.product.price , val.quantity)
    //        const amount = val.product.price * val.quantity;
    //         console.log(' data total amount  = ',amount)
    //         const Obj = [...NewAmount , amount]
    //         console.log(' data total array amount  = ',Obj)
    //         // setNewAmount(Obj)
        
    //     })

    //     console.log(' new amount = ', NewAmount)



        // const Temp = {amount :prop};

        // // data price   and data quantity 
        // // { 10 , 20 , 23 }
        // // { 1 , 2 ,3}
        // // { 1, 40 , 69}

        // const Obj = {...NewAmount , ...Temp }
        // console.log (' temp  ppp = ',Obj)

        // setNewAmount(Obj);



    //     return  55 
        
    // }




return(
    <>

    <cartListContext.Provider value = {{data , setData , onAddToCart ,CartCount , setUserData ,handleDeleteCartItem , HandleQuantity , btn , updateQuantity      }} >
    {props.children}
    </cartListContext.Provider>
    </>


)


}
export default CartState ;
