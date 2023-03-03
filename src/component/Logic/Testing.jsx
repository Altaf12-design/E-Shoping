import React, { useContext } from 'react'
import { AppContext } from '../Context'

const Testing = () => {
    let {state}=useContext(AppContext)
    let {product}=state
    console.log(product)
  return (
    <div>
        Testing
        {product.map((item)=>{
            return(
                <>
              {item.category.name}
               </>
            )
        })}
    </div>
  )
}

export default Testing