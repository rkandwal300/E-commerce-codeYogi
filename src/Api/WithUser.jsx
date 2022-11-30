import { useContext } from "react"
import { UserContext } from "../App"


const withUser =(  IncomingComponent )=>{

    const OutgoingComponent =( props )=>{

        const { user , setUser  } = useContext( UserContext );

        return (
            <IncomingComponent {...props} user={user} setUser = {setUser}  /> 
        )

    }

}

export default withUser ;