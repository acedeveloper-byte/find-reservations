'use client'
import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

const TopDestination = () => {
    const destinations = [
  {
    city: "Miami",
    price: 132,
    image: "/images/miami.jpg",
  },
  {
    city: "Denver",
    price: 178,
    image: "/images/newyork.jpg",
  },
  {
    city: "Boston",
    price: 154,
    image: "/images/boston.jpg",
  },
  {
    city: "Atlanta",
    price: 140,
    image: "/images/atlanta.jpg",
  },
  {
    city: "Dallas",
    price: 160,
    image: "/images/dallas.jpg",
  },
  {
    city: "Portland",
    price: 120,
    image: "/images/portland.jpg",
  },
];

  return (
    <div>
        <Container className="py-4">
      <h4 className="mb-4 fw-bold border-bottom pb-2 text-dark tex-center">Top Destinations</h4>
      <Row>
        {destinations.map((dest, idx) => (
          <Col md={4} className="mb-4" key={idx}>
            <Card className="text-white border-0">
              <Card.Img src={dest.image} alt={dest.city} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.ImgOverlay className="d-flex flex-column justify-content-between p-3">
                <div>
                  <small>Flight to</small>
                  <h5 className="fw-bold">{dest.city}</h5>
                </div>
                <div className="text-end">
                  <small>Start From </small>
                  <strong>${dest.price}</strong>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  )
}

export default TopDestination
