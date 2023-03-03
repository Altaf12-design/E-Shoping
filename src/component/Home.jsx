import React, { useContext } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import ReactShowMoreText from 'react-show-more-text'
import { AppContext } from './Context'
import Product from './Product'
import Spiner from './Spiner'

export const Home = () => {
  let {state,Loading}=useContext(AppContext)
  let {product,filteredDatas}=state
  console.log(filteredDatas)
  return (
    <>
    <div className='container'> 
    <Row xs={1} md={4} className="g-4">
      {filteredDatas==''?(
        <>
          {Loading?<Spiner/>: product.map((prod)=>{
            return(
            <>
            <Product prod={prod} key={prod.id}/>
            </>
            )
           })}
           </>
      ):(
        <>
        {Loading?<Spiner/>: filteredDatas.map((prod)=>{
          return(
          <>
           <Product prod={prod} key={prod.id}/>
          </>
          )
         })}
           </>
      )}
    
    </Row>
  
    </div>
    </>
  )
}
export default Home