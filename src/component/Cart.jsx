import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Card, Col, Dropdown, Form, Row } from 'react-bootstrap'
import { AppContext } from './Context'

const Cart = () => {
  let {state,dispatch}=useContext(AppContext)
  let {Cart}=state
const [Total,setTotal]=useState(0)
const [Qty,setQty]=useState(0)

useEffect(()=>{
  Totalfuntion()
},[])

  const handle = (id,i) => {
    const itemIndex = Cart.findIndex((item) => item.id === id);
    Cart[itemIndex].qty = i;
     
 dispatch({
  type:'Add_qty',
  payload:Cart
 })   
 Totalfuntion()
  }


  let Totalfuntion=()=>{
    let grand=0
    let totalQty=0
    const prices = Cart.map(item => item.price);
    const qtytotal = Cart.map(item => item.qty);
    prices.map((items)=>{
      grand=items+grand
    })
    qtytotal.map((item)=>{
      totalQty=item+totalQty
    })

    setTotal(grand)
    setQty(totalQty)
  }
 
  return (
    <div className='container'>
      {Cart.length>0?
      <>
     {Cart.map((item)=>{
      return(
        <>
        <Card style={{marginTop:'15px'}}>
          <Card.Body>
            <Row style={{justifyContent:'center',alignItems:'center'}}>
              <Col>
              <img style={{width:'100px',borderRadius:'30%'}} src={item.images} alt={item.title}/>
              </Col>
           
            <Col>
            <h6>{item.title}</h6>
              </Col>
               
            <Col>
            <h6>({item.qty})</h6>
              </Col>
           
            <Col>
            <h6>${item.price}</h6>
              </Col>
           <Col>
           <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       Select No. items
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item onClick={()=>handle(item.id,1)}>1</Dropdown.Item>
        <Dropdown.Item onClick={()=>handle(item.id,2)}>2</Dropdown.Item>
        <Dropdown.Item onClick={()=>handle(item.id,3)}>3</Dropdown.Item>
        <Dropdown.Item onClick={()=>handle(item.id,4)}>4</Dropdown.Item>
      
      </Dropdown.Menu>
    </Dropdown>
           </Col>
          <Col>
      <button onClick={()=>dispatch({
         
        type:'remove_from_cart',
        payload:item
      })} className='btn btn-danger'>Delete</button>
          </Col>
        
            </Row>
          
          </Card.Body>
        </Card>
        </>
      )
      
     })
     

 
     }
     </>
     :
     <div className='w-100%' style={{height:'500px',justifyContent:'center',display:'flex',alignItems:'center'}}>
  <h2>No Items....</h2>
     </div>
   
    }
{Cart.length==0?
<></>
:
<Card style={{marginTop:'15px'}}>
          <Card.Body>
            <Row>
            <Col className='col-md-5'>
           
              <h5 style={{marginLeft:'60%'}}>Total items={Qty}</h5>
              </Col>
              <Col >
              <h5>Total Price=${Total}</h5>
              </Col>
            </Row>
       
    
          </Card.Body>
        </Card>

}

    </div>
  )
}

export default Cart