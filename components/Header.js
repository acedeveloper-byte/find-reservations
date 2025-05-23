"use client";
import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Link from "next/link";
import "../app/globals.css";
import { FaPhoneVolume } from "react-icons/fa6";

const Header = () => {
  return (
    <>    <Navbar expand="lg" className="navbar-bg-color header-layout py-3" style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'}}>
      <Container>
        <Navbar.Brand as={Link} href="/">
         <img src="/images/logo/logo.png" alt="logo" className="logo-layout" />
         
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " style={{ fontSize: '15px !important' }} />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto mob-nav">
            <a
              href="/"
              className="mx-2 fw-medium text-decoration-none text-dark mx-3"
            >
              Home
            </a>
            <a
              href="/about-us"
              className="mx-2 fw-medium text-decoration-none text-dark mx-3"
            >
              About Us
            </a>
           
            <a
              href="/contact-us"
              className="mx-2 fw-medium text-decoration-none text-dark mx-3"
            >
              Contact Us
            </a>
          </Nav>

          {/* Right-Aligned Button */}
          <div className="ms-5">
  <Link href="tel:+1 844-762-1214" className="text-decoration-none">
    {/* <a className="text-decoration-none"> */}
      <button className="animated-call-btn d-flex align-items-center gap-2 px-4 py-2  text-white">
        <FaPhoneVolume size={18} />
      +1 844-762-1214
      </button>
    {/* </a> */}
  </Link>
</div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>

  );
};

export default Header;
