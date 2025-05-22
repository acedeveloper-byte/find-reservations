'use client'
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  ToggleButtonGroup,
  ToggleButton,
  InputGroup,
  Dropdown,
} from "react-bootstrap";
import { FaSearch, FaExchangeAlt, FaChevronDown, FaMinus, FaPlus } from "react-icons/fa";

const SearchEngine = () => {
  const [tripType, setTripType] = useState("round");

  // Traveler States
  const [showTravelerDropdown, setShowTravelerDropdown] = useState(false);
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [infant, setInfant] = useState(0);

  // Helper values
  const totalTravelers = adult + child + infant;
  const travelerLabel = `${totalTravelers} Passenger${totalTravelers > 1 ? "s" : ""}`;

  // Handlers
  const increment = (type) => {
    if (type === 'adult') setAdult(adult + 1);
    if (type === 'child') setChild(child + 1);
    if (type === 'infant') setInfant(infant + 1);
  };

  const decrement = (type) => {
    if (type === 'adult' && adult > 1) setAdult(adult - 1);
    if (type === 'child' && child > 0) setChild(child - 1);
    if (type === 'infant' && infant > 0) setInfant(infant - 1);
  };

  return (
<div
  className="text-white text-center py-5 w-100 full-background">
    <Container>
        <h1 className="fw-bold title">Book with Find-Reservation for Unbeatable Flight Deals!</h1>
        <div className="search-background text-dark rounded-3 shadow p-3 my-5">
          <Row className="g-2 align-items-center">
            <Col xs={12} md="auto">
              <ToggleButtonGroup type="radio" name="tripType" value={tripType} onChange={setTripType}>
                <ToggleButton id="tbg-radio-1" value="round" variant="outline-primary">
                  Round Trip
                </ToggleButton>
                <ToggleButton id="tbg-radio-2" value="oneway" variant="outline-primary">
                  One Way
                </ToggleButton>
              </ToggleButtonGroup>
            </Col>
            <Col xs={12} md="auto">
              <Form.Select>
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>Business</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="g-2 mt-3">
            <Col md>
              <Form.Label className="text-white fw-bold">From</Form.Label>
              <InputGroup>
                <Form.Control placeholder="From where?" />
              </InputGroup>
            </Col>
            <Col md="auto" className="text-center d-flex align-items-center justify-content-center">
              <FaExchangeAlt className="text-primary fs-4" />
            </Col>
            <Col md>
              <Form.Label className="text-white fw-bold">To</Form.Label>
              <InputGroup>
                <Form.Control placeholder="To where?" />
              </InputGroup>
            </Col>
            <Col md>
              <Form.Label className="text-white fw-bold">Depart</Form.Label>
              <Form.Control type="date" defaultValue="2025-05-22" />
            </Col>
            <Col md>
              <Form.Label className="text-white fw-bold">Return</Form.Label>
              <Form.Control type="date" defaultValue="2025-05-22" disabled={tripType === "oneway"} />
            </Col>

            {/* Travelers Dropdown */}
            <Col md>
              <Form.Label className="text-white fw-bold">Travelers</Form.Label>
              <Dropdown show={showTravelerDropdown} onToggle={() => setShowTravelerDropdown(!showTravelerDropdown)}>
                <Dropdown.Toggle variant="outline-secondary" className="w-100 text-start">
                  {travelerLabel} <FaChevronDown className="float-end mt-1 text-white" />
                </Dropdown.Toggle>

                <Dropdown.Menu className="p-3" style={{ minWidth: "250px" }}>
                  {[
                    { label: "Adult", age: "", value: adult, type: "adult" },
                    { label: "Child", age: "(2-11)", value: child, type: "child" },
                    { label: "Infant", age: "(0-2)", value: infant, type: "infant" },
                  ].map(({ label, age, value, type }) => (
                    <div key={type} className="d-flex justify-content-between align-items-center my-2">
                      <div>{label} <small className="text-muted">{age}</small></div>
                      <div className="d-flex align-items-center">
                        <Button variant="outline-primary" size="sm" onClick={() => decrement(type)}><FaMinus /></Button>
                        <div className="px-2">{value}</div>
                        <Button variant="outline-primary" size="sm" onClick={() => increment(type)}><FaPlus /></Button>
                      </div>
                    </div>
                  ))}

                  <Button variant="primary" className="w-100 mt-2" onClick={() => setShowTravelerDropdown(false)}>
                    Done
                  </Button>
                </Dropdown.Menu>
              </Dropdown>
            </Col>

            <Col md="auto" className="d-flex align-items-end">
              <Button  className="w-100 search-btn">
                <FaSearch className="me-2" /> Search
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default SearchEngine;
