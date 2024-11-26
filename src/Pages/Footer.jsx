
import React from 'react'
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import {Container,Row,Col,NavDropdown,Carousel, NavLink,Button} from 'react-bootstrap'
import { TiLocationArrow } from "react-icons/ti";
import pic1 from '../img/unsplash_W10_NCsLVyc.png'
import pic2 from '../img/unsplash_PxJ9zkM2wdA.png'
import pic3 from '../img/unsplash__79ZJS8pV70.png'

import pic4 from '../img/unsplash_W10_NCsLVyc.png'
import pic5 from '../img/unsplash_W10_NCsLVyc.png'
import pic6 from '../img/unsplash_74yRjQ-cvNI.png'


const Footer = () => {
  return (
 <>
  <div style={{ paddingTop: "5px" }}>
      <MDBFooter bgColor="" className="text-white text-center text-lg-left footer1">
        <MDBContainer className="p-4">
          <MDBRow>
            <MDBCol lg="3" md="12" className="mb-4 mb-md-0 mt-5">
              <h4 className="text-uppercase">LOGO</h4>

              <p className="para">
             Lorem ipsum dolor sit 
              </p>
              <input type='text' className='mt-' /><TiLocationArrow size={28} className='bg-primary mb-1' />
            </MDBCol>

            <MDBCol lg="4" md="6" className="mt-5 mb-4 ml-5 mb-md-0">
              <h5 className="text-uppercase">Contact</h5>
              <div className="footer">
             <p>25950 Long Lane, North Ismael 14280
             </p>
             <p>00965 96659986</p>
             <p>ermaine.Connelly@yahoo.com</p>
             <p>Sun Sat / 10:00 AM 8:00 PM</p>
              </div>
            </MDBCol>
            <MDBCol lg="1" md="6" className="mb-4 mt-5 mb-md-0">
              <h5 className="text-uppercase">LINKS</h5>
              <div className="footer">
                <ul className="list-unstyled mb-0">
                  <li>
                    <NavLink to="/Aboutus">AboutUs</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contactus">ContactUs</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contactus">Our menu</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contactus">Team</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contactus">FQA</NavLink>
                  </li>
                </ul>
              </div>
            </MDBCol>

            <MDBCol lg="3" className='mt-5'>
              <h5 className="text-uppercase mb-0">Gallery</h5>
              <Container>
              <Row>
                <Col md={4}>
                <img src={pic2}/>
                </Col>
                <Col md={4}>
                <img src={pic1}/>
                </Col>
                <Col md={4}>
                <img src={pic3}/>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                <img src={pic1}/>
                </Col>
                <Col md={4}>
                <img src={pic5}/>
                </Col>
                <Col md={4}>
                  <img src={pic6}/>
                </Col>
              </Row>
              </Container>
            </MDBCol>
       
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
      <div
          className="bg-primary p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        > Copyright:
        logo.com
        </div>
    </div>
 </>
  )
}

export default Footer

