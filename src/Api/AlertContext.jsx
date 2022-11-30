import React, { createContext, useState } from 'react'


export const AlertContext = createContext();


const AlertState = () => {

    const [alert, setalert] = useState();


return (
    <AlertContext.Provider value = {{ alert , setalert}} >
        {children}
    </AlertContext.Provider>
    )
}

export default AlertState;