'use client'
import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";

const PhoneSticky = () => {
  return (
    <div className="phone-sticky">
      <a href="tel:+10000000000">
        <FaPhoneVolume style={{ marginRight: '8px' }} /> 
        +1-000-000-0000
      </a>
    </div>
  )
}

export default PhoneSticky
