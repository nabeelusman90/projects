import React from 'react'
import { Container, Row, Col, NavDropdown, Carousel, NavLink, Button } from 'react-bootstrap'
import pic1 from '../img/frame4.png'

const Book = () => {
  return (
    <>
   <Row>
    <Col className='nabeel mt-5'>
         <div className='text2 text-block mt-5'><h1>Book Early & Save</h1>
         <p className='mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, nulla.</p>
         <Button variant="primary" size="lg" active className='mt-3'>
        Primary button
      </Button>
         </div>
         
    </Col>
   </Row>
    </>
  )
}

export default Book
