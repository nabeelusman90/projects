import React from 'react'
import {Container,Row,Col,NavDropdown,Carousel, NavLink,Button} from 'react-bootstrap'
import { IoRestaurant } from "react-icons/io5";
import { LuHotel } from "react-icons/lu";
import { FaConciergeBell } from "react-icons/fa";




const Our = () => {
  return (
    <>
     
    <Row className=' mt-3 ro1'>
    <h1 className=''>OUR SERVICES</h1>
  
        <Col className=''><h4 className='text-center'>< FaConciergeBell size={40} className='mr-5' /><br/>Resturant
        </h4>
        <p style={{fontSize: "small"}} className='text-center lead'>Lorem ipsum dolor sit amet consectetur. 
Felis quam ut elementum non a 
consectetur. Vel ornare purus pretium ut</p></Col>
        <Col ><h4 className='text-center'><IoRestaurant size={40} className='mr-5' /><br/>Dining</h4>
        <p style={{fontSize: "small"}} className='text-center'>Lorem ipsum dolor sit amet consectetur. 
Felis quam ut elementum non a 
consectetur. Vel ornare purus pretium ut</p></Col>
        <Col><h4 className='text-center'><LuHotel size={40} className='mr-5' /><br/>Resturant
        </h4>
        <p style={{fontSize: "small"}} className='text-center'>Lorem ipsum dolor sit amet consectetur. 
Felis quam ut elementum non a 
consectetur. Vel ornare purus pretium ut</p></Col>
  
    </Row>
    </>
  )
}

export default Our
