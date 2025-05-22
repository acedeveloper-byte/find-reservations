'use client';
import React from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  return (
    <footer className=" text-white pt-5 pb-3 position-relative" style={{background: '#0d1218'}}>
      <Container>
        <Row>
          {/* About Us */}
          <Col md={4} className="mb-4 text-start">
                   <img src="/images/logo/logo.png" alt="logo" className="logo-layout" style={{    background: '#fff',
    padding: '14px'}}/>
   <p className='my-3'>
        Visit Find-Reservations to book tickets for your next fight at pocket-friendly fares. We offer exclusive travel deals so you can save extra on your travel expenses. Start planning your trip today, and have an unforgettable journey. </p>

            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white fs-5"><FaFacebookF /></a>
              <a href="#" className="text-white fs-5"><FaXTwitter /></a>
              <a href="#" className="text-white fs-5"><FaInstagram /></a>
              <a href="#" className="text-white fs-5"><FaLinkedinIn /></a>
            </div>
          </Col>

      

          {/* Links */}
          <Col md={4}>
            <Row>
              <Col xs={6}>
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                  <li><a href="/about-us" className="text-white text-decoration-none">About us</a></li>
                
                  <li><a href="/contact-us" className="text-white text-decoration-none">Contact us</a></li>
              
                </ul>
              </Col>
              <Col xs={6}>
                <h5>Help Links</h5>
                <ul className="list-unstyled">
                  <li><a href="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</a></li>
                  <li><a href="/terms-and-conditions" className="text-white text-decoration-none">Terms & Condition</a></li>
                </ul>
              </Col>
            </Row>
          </Col>

              {/* Contact Info */}
          <Col md={4} className="mb-4 text-center">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Phone: <a href="tel:+1-000-000-0000 " className='text-decoration-none text-white'>1-000-000-0000</a></li>

              <li>Email: support@find-reservations.com</li>
              <li>Address: 222 NE 44TH ST MIAMI, FL 33138</li>
            </ul>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <div className="border-top mt-4 pt-3">
          <p className="text-white small mb-1 text-center">
            <strong>Disclaimer:</strong> 
Find-Reservations is as an independent third-party online travel portal that is not directly associated with any airline. 
          </p>
          <hr />
          <p className="text-white small mb-0 text-center">
            © 2025 find-reservations. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
