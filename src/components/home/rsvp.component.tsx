
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import sub_house from '../../shared/images/photo_berdua_subhouse.png';

export const RSVPComponent = () => {
  return (
    <Row>
      <Col sm="4">
        <Card className="bg-gray-dark">
          <Card.Img variant="top" src={sub_house} />
          <Card.Body>
            <h3 style={{ color: "white" }}>Bukber berr... di Sub House ✅ </h3>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">24 April 2022</small>
          </Card.Footer>
        </Card>
      </Col>

      <Col sm="4">
        <Card className="bg-gray-dark">
          <Card.Img variant="top" alt="img" />
          <Card.Body>
            <h3 style={{ color: "white" }}>What's next ??? </h3>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}
