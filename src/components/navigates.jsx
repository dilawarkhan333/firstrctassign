import React from "react";
import { Routes,Route } from "react-router-dom"
import Navb from "./navbars";
import Gall from "./gallery";
import Con from "./contact";
import Abt from "./about";
import Ser from "./service";
class Navi extends React.Component{
    render(){
return(

<>
<Routes>
<Route path="/" element ={<Navb/>} ></Route>
<Route path="/gallery"  element={<Gall/>} ></Route>
<Route path="contact"  element={<Con/>}  ></Route>
<Route path="about"  element={<Abt/>}  ></Route>
<Route path="service"  element={<Ser/>} ></Route>
</Routes>


</>


)

    }
}

export default Navi