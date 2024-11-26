import React from 'react'
import { Container, Row, Col, NavDropdown, Carousel, NavLink, Button } from 'react-bootstrap'
import { MdOutlineDone } from "react-icons/md";


const Aboutus = () => {
    return (
        <>

            <Container>
                <Row>
                    <Col className='mt-5 bg-light'>
                        <h3>About Us</h3>
                        <h1>We Create the bestfoody product</h1>
                        <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel placerat ex, ac fermentum velit. Duis auctor, nunc vel faucibus eleifend, urna felis dignissim purus, vitae tincidunt nunc nunc id velit. Nulla facilisi. Donec euismod semper nisi, vel pulvinar lectus viverra ac. Sed non sem vel nisi malesuada fringilla.</p>
                        <p className='mt-3'><MdOutlineDone />Lacus nisi, et ac dapibus sit eu velit in consequat</p>
                        <p><MdOutlineDone />Lacus nisi, et ac dapibus sit eu velit in consequat</p>
                        <p><MdOutlineDone />Lacus nisi, et ac dapibus sit eu velit in consequat</p>
                        <Button  variant="primary" className='size="lg col-6"'>BOOK NOW</Button>
                    </Col>
                    <Col>
                    
                        <Col className='col-10 mt-5 mr-5 pic22' ></Col>
                        <Row className='row  p-3'>
                        <Col className='bg-dark col-5  mr-5  pic23 '></Col> <Col  className='bg-danger col-5   pic24 '></Col></Row>
                    
                       
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Aboutus
