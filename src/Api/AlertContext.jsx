import React, { createContext, useState } from 'react'


export const AlertContext = createContext();


const AlertState = (props) => {

    const data = {
        type: '',
        message :'' ,
        hidden  :  true,
    }

    const [alert, setalert] = useState(data);





return (
    <AlertContext.Provider value = {{  alert, setalert  }} >
        {props.children}
    </AlertContext.Provider>
    )
}

export default AlertState;