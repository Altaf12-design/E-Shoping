import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import ReactShowMoreText from 'react-show-more-text'
import { AppContext } from './Context'

const Product = (props) => {

  let {state,dispatch}=useContext(AppContext)
  let {Cart}=state
  let {prod}=props
  
  return (
    <>
    <Card className='card'>
      <Card.Body>
    <img src={prod.images} style={{width:'100%'}}/>
    <Card.Title style={{marginTop:'10px'}}>{prod.title}</Card.Title>
    <ReactShowMoreText lines={2}>
    <p>{prod.description}</p>
    </ReactShowMoreText>
   
    {Cart.some(item=>item.id === prod.id)?(
 <button 
 onClick={()=>dispatch({
  type:'remove_from_cart',
  payload:prod
 })}
 className='btn btn-danger' style={{marginTop:'10px',width:'100%',padding:'10px'}}>Remove to Cart</button> ):(

<button onClick={
  ()=>dispatch(
  {
    type:'addtocart',
    payload:prod
  }
  )
} className='btn btn-primary' style={{marginTop:'10px',width:'100%',padding:'10px'}}>Add to Cart</button>
    )}
   </Card.Body>
   
    </Card>
  

    </>
  )
}

export default Product