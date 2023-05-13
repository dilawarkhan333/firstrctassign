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

class Ser extends React.Component{
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
            <Link   to="/"  style={{textDecoration:"none" , color:"black",marginLeft:"20"+"px"  }}  >Home</Link>
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
    <h2 style={{fontFamily:"fantasy"}} >Dog Accessories</h2>
                <div className="row" >
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem', }}>
                        <Card.Img variant="top" src="https://img.freepik.com/premium-photo/pet-care-concept-various-pet-accessories-tools-white-marble-background-flat-lay_154515-6907.jpg?size=626&ext=jpg&ga=GA1.1.1537368850.1669180647&semt=ais" />
                      
                    </Card>

                    </div>
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-vector/trendy-various-accessories-cats-dogs-flat-set_74855-15557.jpg?size=626&ext=jpg&ga=GA1.1.1537368850.1669180647&semt=ais" />
                    
                    </Card>

                    </div>
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/premium-vector/pet-care-icons-accessories-cats-flat-vector-illustration-feed-toys-bowl-collar-products_166005-1355.jpg?size=626&ext=jpg&ga=GA1.1.1537368850.1669180647&semt=ais" />
                   
                    </Card>

                    </div>

                  
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/fluffy-dog-sitting-blue-home-workout-instruments-with-several-dumbbells-around_181624-44727.jpg?size=626&ext=jpg&ga=GA1.2.1537368850.1669180647&semt=ais" />
                     
                    </Card>

                    </div>


                   
                </div>

<br></br>

<div className="row" >
<h2 style={{fontFamily:"fantasy"}} >Birds Accessories</h2>
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/premium-vector/parrot-low-poly_14791-17.jpg?size=626&ext=jpg&ga=GA1.1.1537368850.1669180647&semt=ais" />
                     
                    </Card>

                    </div>
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-vector/bird-breaking-out-cage-concept-illustration_114360-15035.jpg?size=626&ext=jpg&ga=GA1.1.1537368850.1669180647&semt=ais" />
                      
                    </Card>

                    </div>
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-vector/birds-birdcages-cute-colored-illustration_1284-42275.jpg?size=626&ext=jpg&ga=GA1.1.1537368850.1669180647&semt=ais" />
                       
                    </Card>

                    </div>

                  
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/premium-vector/set-traditional-brazil-elements_24877-60514.jpg?size=626&ext=jpg&ga=GA1.1.1537368850.1669180647&semt=ais" />
                       
                    </Card>

                    </div>


                   
                </div>

<br></br>


<div className="row" >
<h2 style={{fontFamily:"fantasy"}} >Fish Accessories</h2>
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-vector/fish-bowl-hand-composition_1284-18519.jpg?size=626&ext=jpg&ga=GA1.1.1537368850.1669180647&semt=ais" />
                    
                    </Card>

                    </div>
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/premium-vector/fishing-tools-equipments-colorful-vector-graphics-elements-doodle-illustrations_7243-381.jpg?size=626&ext=jpg&ga=GA1.1.1537368850.1669180647&semt=ais" />
                     
                    </Card>

                    </div>
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/premium-vector/fishing-cartoon-icons-set-isolated_98402-761.jpg?size=626&ext=jpg&ga=GA1.1.1537368850.1669180647&semt=ais" />
                   
                    </Card>

                    </div>

                  
                    <div className="col-lg-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-vector/sketch-seafood-market-concept_1284-37067.jpg?size=626&ext=jpg&ga=GA1.1.1537368850.1669180647&semt=ais" />
                     
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

export default Ser





// background: #8E0E00;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #1F1C18, #8E0E00);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #1F1C18, #8E0E00); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
