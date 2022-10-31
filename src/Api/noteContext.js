import React ,{createContext} from 'react'
import { getSingleProduct } from '../files/api';

const NoteContext = React.createContext ();

const SingleContext = createContext ();



export default NoteContext ; 
export {SingleContext} ;




