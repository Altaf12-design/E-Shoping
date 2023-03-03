  import Dropdown from 'react-bootstrap/Dropdown';
  import { Badge, Card, Col,NavbarBrand, NavLink, Row } from 'react-bootstrap';
  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
  import{FaShoppingCart} from 'react-icons/fa'
  import{AiFillDelete} from 'react-icons/ai'
  import Searching from './Logic/Searching';
  import { useContext } from 'react';
  import { AppContext } from './Context';
  import { Link } from 'react-router-dom';

  const NavHadder = () => {
    let {state,dispatch}=useContext(AppContext)
    let {Cart}=state
    console.log(Cart)
    return (
  <>
  <Navbar bg='dark' variant='dark'>
    <Container>
      <NavbarBrand>
        <NavLink to={'/'}>E-Shoping</NavLink>
      </NavbarBrand>
      <Navbar.Text>
        <Searching/>
      </Navbar.Text>
      <Nav>
    </Nav>
    <Nav>
    <Dropdown>
        <Dropdown.Toggle>
          <FaShoppingCart/>
          <Badge style={{color:'red'}}>{Cart.length}</Badge>
        </Dropdown.Toggle>
        <Dropdown.Menu style={{width:'350px',}} align="end">
          
          {Cart.length>0?(
            Cart.map((item)=>{
              return(
                <Card className='container'>
                  <Card.Body >
                  <Row style={{justifyContent:'center',alignItems:'center'}}>
                  <Col>
                  <img xs={6} style={{width:'60px',borderRadius:'30%'}} src={item.images} alt={item.title}/>
                  </Col>
                  <Col xs={4}>
                    <h6>{item.title}</h6>
                  </Col>
                  <Col>
                  <p>{item.price}</p>
                  </Col>
                  <Col>
                  <AiFillDelete style={{fontSize:'20px',color:'red'}} onClick={()=>dispatch({
                    type:'remove_from_cart',
                    payload:item,
                  
                  })}/>
                
                  </Col>
                  </Row>
                  </Card.Body>
                
                </Card>
              )
            })
            
          ):(<div>
            <h4>No items Add</h4>
            
            </div>)}
        
          <Row>
          <Link to="/cart" className='btn btn-success' style={{width:'80%',marginLeft:'35px',marginTop:'20px'}} >Go to Cart</Link>
          </Row>
        
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
    </Container>
    
  </Navbar>
  </>
    )
  }

  export default NavHadder