import React from 'react'
import LogIn2 from './LogIn2'
import SignUp from './Sign_Up'

const Authentication = () => {
    return (
    <div>

    {  <LogIn2 />  ||  <SignUp />
    }

    </div>
    )
}

export default Authentication