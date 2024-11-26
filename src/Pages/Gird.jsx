import React from 'react'

import { Container, Row, Col, NavDropdown, Carousel, NavLink, Button } from 'react-bootstrap'
import pic1 from '../img/pic.png'
import pic2 from '../img/Picture → 14-1-600x400.jpg.webp.png'


const Gird = () => {
  return (
    <>
  <Row className='mt-5'>
   <Col><img src={pic1} alt="" /></Col>
   <Col className='ccc'><div className='divv'><h1 className='text-end'>Our Restaurant</h1><p className='lead mt-5'>nd facilisis sed facilisis varius hendrerit accumsan tortor. Donec 
nisi est mattis mauris morbi orci maecenas duis. Eleifend facilisis sed 
facilisis varius hendrerit accumsan tortor. Donec nisi est mattis 
mauris morbi orci maecenas duis. Eleifend facilisis sed facilisis varius 
hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci 
maecenas duis. Eleifend facilisis sed facilisis varius hendrerit 
accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas 
duis.</p></div></Col>
  </Row>
  <Row>
  <Col><div className='diva'><h1 className=' mt-5'>Meet & Greet</h1><p className='mt-5'>Lorem ipsum dolor sit amet consectetur. Sed amet nibh 
ante ultrices adipiscing euismod enim diam imperdiet. 
Tellus justo proin sed orci et turpis diam libero. Eleifend 
facilisis sed facilisis varius hendrerit accumsan tortor. Donec 
nisi est mattis mauris morbi orci maecenas duis. Eleifend 
facilisis sed facilisis varius hendrerit accumsan tortor. Donec 
nisi est mattis mauris morbi orci maecenas duis</p></div></Col>
  <Col><img src={pic2} alt="" /></Col> 
  </Row>
    </>
  )
}

export default Gird
