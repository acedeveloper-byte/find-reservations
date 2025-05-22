'use client'
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";

const flightDeals = [
  {
    airlineLogo: "/miami.jpg",
    from: "MIA",
    fromCity: "Miami",
    to: "IST",
    toCity: "Istanbul",
    dateRange: "16-June-2025 - 22-July-2025",
    price: "$459",
  },
  {
    airlineLogo: "/newyork.jpg",
    from: "ATL",
    fromCity: "Atlanta",
    to: "NYC",
    toCity: "New York",
    dateRange: "30-June-2025 - 16-July-2025",
    price: "$267",
  },
  {
    airlineLogo: "/delta.png",
    from: "SEA",
    fromCity: "Seattle",
    to: "BOS",
    toCity: "Boston",
    dateRange: "30-July-2025 - 26-Aug-2025",
    price: "$289",
  },
  {
    airlineLogo: "/united.png",
    from: "PHX",
    fromCity: "Phoenix",
    to: "LGA",
    toCity: "LaGuardia",
    dateRange: "12-Aug-2025 - 28-Sep-2025",
    price: "$395",
  },
  {
    airlineLogo: "/united.png",
    from: "IAH",
    fromCity: "Houston",
    to: "SJU",
    toCity: "Puerto Rico",
    dateRange: "14-Aug-2025 - 30-Sep-2025",
    price: "$312",
  },
  {
    airlineLogo: "/aircanada.png",
    from: "IST",
    fromCity: "Istanbul",
    to: "ORD",
    toCity: "Chicago",
    dateRange: "25-July-2025 - 28-Aug-2025",
    price: "$829",
  },
];

const FlightDeals = () => {
  return (
    <Container className="my-5">
      <h4 className="mb-4 fw-bold text-dark text-center">Top Flight Deals Offers Await!</h4>
      <Row>
        {flightDeals.map((deal, idx) => (
          <Col md={6} key={idx} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body className="d-flex align-items-center">
                <div className="me-3">
                  {/* <Image src={deal.airlineLogo} alt="Airline Logo" width={50} height={50} /> */}
                </div>
                <div className="flex-grow-1">
                  <div className="text-muted small">{deal.dateRange}</div>
                  <div className="d-flex align-items-center">
                    <div className="fw-bold me-2">{deal.from}</div>
                    <span className="me-2">&#9992;</span>
                    <div className="fw-bold me-2">{deal.to}</div>
                  </div>
                  <div className="small text-muted">
                    {deal.fromCity} → {deal.toCity}
                  </div>
                </div>
                <div className="text-end">
                  <div className="fw-bold text-success">Starting From</div>
                  <div className="fs-5 fw-bold">{deal.price}</div>
                <a href="tel: +1">  <Button  size="sm" className="mt-2 book-now">Book Now</Button></a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FlightDeals;
