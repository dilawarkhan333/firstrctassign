import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

class Gall extends React.Component {
    render() {
        return (

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



                
<div  style={{marginTop:"20px",marginLeft:"20px", marginRight:"20px"  }}  >
                <div className="row" >
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2014/10/01/10/44/animal-468228__340.jpg" />
                      
                    </Card>

                    </div>
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/03/27/13/16/maine-coon-694730__340.jpg" />
                    
                    </Card>

                    </div>
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/08/12/17/11/roe-deer-2634729__340.jpg" />
                   
                    </Card>

                    </div>

                  
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/12/31/21/22/discus-fish-1943755__340.jpg" />
                     
                    </Card>

                    </div>


                   
                </div>

<br></br>

<div className="row" >
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2019/10/19/11/35/wolf-4561204__340.png" />
                     
                    </Card>

                    </div>
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/05/16/21/24/gorilla-2318998__340.jpg" />
                      
                    </Card>

                    </div>
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/01/26/11/17/european-eagle-owl-2010346__340.jpg" />
                       
                    </Card>

                    </div>

                  
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2018/06/24/18/46/butterfly-3495224__340.jpg" />
                       
                    </Card>

                    </div>


                   
                </div>

<br></br>


<div className="row" >
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    
                    </Card>

                    </div>
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/117139/pexels-photo-117139.jpeg?auto=compress&cs=tinysrgb&w=600" />
                     
                    </Card>

                    </div>
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&w=600" />
                   
                    </Card>

                    </div>

                  
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/672142/pexels-photo-672142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                     
                    </Card>

                    </div>


                   
                </div>



                </div>



               < div style={{display:"flex" , gap:"20px",justifyContent:"center"}} >

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

export default Gall