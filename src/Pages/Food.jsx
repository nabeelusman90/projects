import React from 'react'
import { Container, Row, Col, NavDropdown, Carousel, NavLink, Button } from 'react-bootstrap'
const Food = () => {
  return (
   <>
   
   <h1 className='text-center'>Food Category</h1>
   <Container className='mt-5'>
      <Row className='margin'>
        <Col className='x1'><div className='buti'><Button variant="primary" className='size="lg" mt-2'>Dessert</Button></div></Col>
        <Col  className='x2'><div className='buti1'><Button variant="primary" className='size="lg" mt-2'>Fast food</Button></div></Col>
        <Col  className='x3'><div className='buti2'><Button variant="primary" className='size="lg" mt-2'>Dessert</Button></div></Col>
        <Col  className='x4'><div className='buti3'><Button variant="primary" className='size="lg" mt-2'>Fast food</Button></div></Col>
      </Row>
      </Container>
   </>
  )
}

export default Food
