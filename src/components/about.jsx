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
import myim from '../assets/myimage1.jpeg'
import Nav from 'react-bootstrap/Nav';

class Abt extends React.Component{
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

    <br></br>

<div className="row">
<div   className="col-sm-12" className1="col-md-6" className2="col-lg-3"   >
<h1 style={{textAlign:"center", fontFamily:"fantasy"}} ><b>Introduction</b></h1>

<h5  style={{textAlign:"center",marginLeft:"30px",marginRight:"30px"}} >Welcome to our animal business,
    where we provide a wide range of products and services to animal lovers and enthusiasts.
    Our CEO, Dilawar Khan, has a deep passion for animals and has dedicated his career to their well-being.
    Our business offers a variety of products, including animal feed, grooming supplies,
    and veterinary care. We also offer pet adoption services,
    where we match loving homes with animals in need.
    At our business, we believe that animals deserve the very best care and attention, 
    and we strive to provide that in everything we do.
    Thank you for choosing us as your partner in animal care!</h5>
    </div>
    </div>
<br></br>


  <div style={{textAlign: 'center'}}>
  <img  style={{width:"450px",height:"450px", borderRadius:"20px 20px"}}    src={myim}/>
  <h4 style={{fontFamily:"fantasy"}} >CEO Of Animal Stock Management Mr. Dilawar Khan </h4>
    </div>
{/* <h4>CEO Of Animal Stock Management Mr. Dilawar Khan </h4> */}

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

export default Abt