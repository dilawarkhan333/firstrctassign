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
import { Formik,Form, Field,ErrorMessage } from "formik"
import * as Yup from 'yup';

import Nav from 'react-bootstrap/Nav';

class Con extends React.Component{
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

<br></br>

<h1 style={{textAlign:"center"}} > <b>Enter Your Id</b></h1>   
<br></br>
<br></br>

        <Formik
        initialValues={{email :"",firstName:""}} //inital value start 

        validationSchema={Yup.object({
            firstName:Yup.string().min(10,"min lettr 10").required(),
            email:Yup.string().email("Invalid email address").required()
        }) }
        onSubmit={(value)=>{
            console.log(value)
        }}
        >
            <Form style={{textAlign:"center"}}>
                <Field name={"email"}/>
                <br/>

                <ErrorMessage name={"email"}/>
                <br/>

                <Field name={"firstName"}/>
                <br/>

                <ErrorMessage name={"firstName"}/>
                <br/>

                <button type="submit">Submit</button>

            </Form>

        </Formik>

        <br></br>
<br></br>
<br></br>
<br></br>
 <br></br>
<br></br>
<br></br>
<br></br>
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

export default Con