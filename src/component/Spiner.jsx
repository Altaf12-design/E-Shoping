import React from 'react'

import Spinner from 'react-bootstrap/Spinner';
import { ScaleLoader,CircleLoader } from 'react-spinners';
const Spiner = () => {
  return (
    <div style={{width:'100%',height:'500px',justifyContent:'center',display:'flex',alignItems:'center'}}>
         <ScaleLoader animation="grow" />
      
    </div>
  )
}

export default Spiner