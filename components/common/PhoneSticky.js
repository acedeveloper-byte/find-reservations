'use client'
import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";

const PhoneSticky = () => {
  return (
    <div className="phone-sticky">
      <a href="tel:+10000000000">
        <FaPhoneVolume style={{ marginRight: '8px' }} /> 
      +1 844-762-1214
      </a>
    </div>
  )
}

export default PhoneSticky
