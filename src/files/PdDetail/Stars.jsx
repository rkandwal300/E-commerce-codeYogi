import React from 'react'
import { ImStarHalf,ImStarEmpty , ImStarFull } from "react-icons/im";

const Stars = ({props}) => {

    let data = props
    let intData = parseInt(data);
    let empty = 5-data ;
    let decData = data - intData ;

    console.log('stars = ',data);
    console.log(' int stars = ',intData);
    console.log(' dec stars = ',decData);
    console.log('empty = ',empty);
  return (
    <div>
        {
            intData* <ImStarFull />
        }
    </div>
  )
}

export default Stars