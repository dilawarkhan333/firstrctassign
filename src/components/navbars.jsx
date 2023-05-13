import React from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import { AiFillFacebook } from 'react-icons/ai';
import{ AiFillInstagram} from 'react-icons/ai'
import{ AiFillLinkedin} from 'react-icons/ai'
import Button from 'react-bootstrap/Button';


import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';

class Navb extends React.Component{
render(){
return(


<>


<Navbar collapseOnSelect expand="lg" style={{background:"linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)", fontSize:"20px"}}  >
      <Container>

      <img
              alt=""
              src="https://img.icons8.com/?size=512&id=NfbyHexzVEDk&format=png"
              width="40"
              height="40"
              className="d-inline-block align-top"
              
            />

        <Navbar.Brand href="#home"><b style={{marginRight:"100px"}} >React Bar</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link   to="/"  style={{textDecoration:"none" , color:"black",marginLeft:"20px"  }}  >Home</Link>
            <Link to="/gallery" style={{textDecoration:"none" , color:"black",marginLeft:"20px"}}  >Gallery</Link>
  
            <Link   to="/contact"  style={{textDecoration:"none" , color:"black",marginLeft:"20px" }} >Contact Us</Link>
          
            <Link  to="/about" style={{textDecoration:"none"  , color:"black",marginLeft:"20px"}}  >
             About
            </Link>
          
            <Link  to="/service" style={{textDecoration:"none"  , color:"black", marginLeft:"20px"}}  >
             Services
            </Link>

          </Nav>
        
            
        </Navbar.Collapse>
      </Container>
    </Navbar>




      {/* <Navbar  style={{background:"linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)"}} >
        <Container>
          <Navbar.Brand href="#home">      
          <div > 
            <img
              alt=""
              src="https://img.icons8.com/?size=512&id=NfbyHexzVEDk&format=png"
              width="40"
              height="40"
              className="d-inline-block align-top"
              
            />

           <b> React Bar</b> 
           {' '}        
    
      
    <Link to="/" style={{textDecoration:"none", color:"black" , gap:"20px",marginLeft:"300"+"px" }}  >
      
      Home
      </Link>
     
    {' '}

  <Link to="/gallery" style={{textDecoration:"none" , color:"black" }} >
  Gallery
  </Link>
  
 
{' '}


  
<Link to="/contact"  style={{textDecoration:"none" , color:"black" }} >
  Contact
  </Link>
  
{' '}


<Link to="/" style={{textDecoration:"none"  , color:"black"}} >
  About
  
  </Link>
 
{' '}

  
<Link to="/"  style={{textDecoration:"none"  , color:"black"}} >
  Services
  </Link>
 
</div>
          </Navbar.Brand>
        </Container>
      </Navbar> */}

      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={550+"px"}
          src="https://images.pexels.com/photos/448993/pexels-photo-448993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        
         
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={550+"px"}
          src="https://images.pexels.com/photos/60088/pexels-photo-60088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />

  
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={550+"px"}
          src="https://images.pexels.com/photos/1547836/pexels-photo-1547836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>


<br></br>

<div  style={{marginLeft:"20px", marginRight:"20px"}} >

<div className="row" >
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/1300355/pexels-photo-1300355.jpeg?auto=compress&cs=tinysrgb&w=600" />
                      
                    </Card>

                    </div>
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/11815418/pexels-photo-11815418.jpeg?auto=compress&cs=tinysrgb&w=600" />
                       
                    </Card>

                    </div>
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/16683115/pexels-photo-16683115.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                      
                    </Card>

                    </div>

                  
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/16240113/pexels-photo-16240113.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                    
                    </Card>

                    </div>


                   
                </div>

<br></br>
                <div className="row" >
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/15020102/pexels-photo-15020102.jpeg?auto=compress&cs=tinysrgb&w=600" />
                     
                    </Card>

                    </div>
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600" />
                       
                    </Card>

                    </div>
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&w=600" />
                     
                    </Card>

                    </div>

                  
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/2570699/pexels-photo-2570699.jpeg?auto=compress&cs=tinysrgb&w=600" />
                       
                    </Card>

                    </div>


                   
                </div>



                </div>






    
<div style={{display:"flex" , gap:"20px",justifyContent:"center"}} >

  <h1 style={{height:"25px", width:"30px" , color:"blue" }} >  < AiFillFacebook/> </h1> 

  <h1 style={{height:"30px", width:"30px",color:"pink"}} > <AiFillInstagram/></h1>
  <h1 style={{height:"30px", width:"30px",color:"black"}} >
<AiFillLinkedin/>
</h1>
</div>

<br></br>


      <div className='text-center p-3' style={{background:"linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)"}}>
      <b>  © 2020 Copyright:</b>
        </div>
</>



)

}

}

export default Navb

