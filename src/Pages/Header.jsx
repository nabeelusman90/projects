import React from 'react'
import {Container,Row,Col,NavDropdown,Carousel,Button} from 'react-bootstrap'
import { RiInstagramFill } from "react-icons/ri";

import { TiSocialFacebook } from "react-icons/ti";
import { FaSquareTwitter } from "react-icons/fa6";
import slider1 from '../img/close-up-delicious-chicken-meal.jpg';
import { IoIosHome } from "react-icons/io";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowsAlt } from "react-icons/fa";
import Aboutus from './Aboutus';
import Food from './Food';
import Book from './Book';
import Mychef from './Mychef';
import Gird from './Gird';
import Our from './Our';
import Footer from './Footer';
import { NavLink } from 'react-router-dom'






const Header = () => {
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
          <Col className='col-6 jaan'>

          <Carousel>
      <Carousel.Item>
        <img src={slider1} alt="this is img" className="slider" />
        <Carousel.Caption>
          <div className='text'>
          <h4>
          Its Quick & Amusing!
          </h4>
          <h1 className="slider-text">
          Lorem ipsum dolor, sit amet consectetur 
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, sit.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
     
      
    </Carousel>


          </Col>
          <Col className='col-6 jaan'>
          <div className='backimg'>
          <div className='sub'>
          <div className="IoIosHome-20x"><IoIosHome /></div>
            <div className=""><NavLink  style={{textDecoration:"none"}}>HOME</NavLink></div>
            <div className="mt-3"><MdOutlineRestaurantMenu /></div>
            <div className=""><NavLink to="/" style={{textDecoration:"none"}}>MENU</NavLink></div>
            <div className="mt-3"><FaArrowsAlt />
            </div>
            <div className=""><NavLink to="/contantus"  style={{textDecoration:"none"}}>FRANCHISE</NavLink></div>
            <div className="mt-3"><FcAbout /></div>
            <div className=""><NavLink to="/aboutus"  style={{textDecoration:"none"}}>ABOUT</NavLink></div>
            <div className="mt-3"><FaPhoneAlt /></div>
            <div className=""><NavLink to="/product"  style={{textDecoration:"none"}}>CONTACT US</NavLink></div>
            <div className="mt-3"> <Button variant="primary" className='size="lg"'>BOOK</Button></div>
          </div>
          </div>
          </Col>
        </Row>
        <Aboutus/>
        <Food/>
        <Book/>
        <Mychef/>
        <Gird/>
        <Our/>
        <br/>
        <br/>
        <Footer/>
      </>
  )
}

export default Header
