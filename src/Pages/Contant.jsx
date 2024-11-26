import React from 'react'
import {Container,Row,Col,NavDropdown,Carousel,Button,CarouselItem,CarouselCaption} from 'react-bootstrap'
import { RiInstagramFill } from "react-icons/ri";

import { TiSocialFacebook } from "react-icons/ti";
import { FaSquareTwitter } from "react-icons/fa6";
import slider1 from '../img/close-up-delicious-chicken-meal.jpg';
import { IoIosHome } from "react-icons/io";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowsAlt } from "react-icons/fa";

import { NavLink } from 'react-router-dom'
import pic1 from '../img/Screenshot 2024-08-01 234055.png'
import pic2 from '../img/Screenshot 2024-07-13 224723.png'

import Footer from './Footer';

const Contant = () => {
  return (
<>
<Col>
   
   <div className='header'>
 <div className="flex-item item-1">
 <NavDropdown title="ENGLISH" id="basic-nav-dropdown">
             <NavDropdown.Item href="#action/3.1">English </NavDropdown.Item>
             <NavDropdown.Item href="#action/3.2">
               Another action
             </NavDropdown.Item>
             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
             <NavDropdown.Divider />
             <NavDropdown.Item href="#action/3.4">
               Separated link
             </NavDropdown.Item>
           </NavDropdown>
 </div>
 <div className="flex-item item-2">LOGO</div> 
 <div className="flex-item item-3"><div className="vr line"></div><RiInstagramFill /><TiSocialFacebook className='icon1'/><FaSquareTwitter className='icon2' /></div>
</div>

     </Col>
   
 <Row>
         <Col className='col-12'>
        
         <div className='backimg2'>
         <div className='sub2'>
         <div className="IoIosHome-20x"><IoIosHome /></div>
           <div className=""><NavLink>HOME</NavLink></div>
           <div className="mt-3"><MdOutlineRestaurantMenu /></div>
           <div className="">MENU</div>
           <div className="mt-3"><FaArrowsAlt />
           </div>
           <div className=""><NavLink to="/contantus">FRANCHISE</NavLink></div>
           <div className="mt-3"><FcAbout /></div>
           <div className="">ABOUT</div>
           <div className="mt-3"><FaPhoneAlt /></div>
           <div className="">CONTACT US</div>
           <div className="mt-3"> <Button variant="primary" className='size="lg"'>BOOK</Button></div>
         </div>
        
         </div>
         </Col>
       </Row>
                         <h1 className='text-center mt-4'>Introducing New look</h1>
       <Container>
        <Row>
          <Col className='col-12'> 
          <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic1}
          alt="First slide"
        />
       
      </Carousel.Item>

    </Carousel>
</Col>
        </Row>
       </Container>
       
     <Row>
      <Col className='col-6 mt-4 rrr bg-light'><h1>Pouros and Sons</h1>
      <p>646 First Street, Quigleyville 36427 
      country</p>
      <p>768-123 Reviews</p></Col>
      <Col className='col-6 mt-4'><img src={pic2} alt="" /></Col>
     </Row>
     <br/>
     <Footer/>
</>
  )
}

export default Contant
