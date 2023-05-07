import React from "react";
import { Routes,Route } from "react-router-dom"
import Navb from "./navbars";

class Navi extends React.Component{
    render(){
return(

<>
<Routes>
<Route path="/" element ={<Navb/>} ></Route>

</Routes>


</>


)

    }
}

export default Navi