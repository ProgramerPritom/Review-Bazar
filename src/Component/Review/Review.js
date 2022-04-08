import { Button } from 'bootstrap';
import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import './Review.css';

const Review = (props) => {
    const {name,img,text,ratting} = props.review;
    return (
        <div className="cards-area">
            <div>
            <Row>
                <Col>
                <CardGroup>
        <Card className='mt-4'>
         <div className="img-area-card">
         <Card.Img className="card-img-area" variant="top" src={img} />
         </div>
            <Card.Body>
            <Card.Title className='mt-4'>{name}</Card.Title>
            <Card.Text>
            {text}
            </Card.Text>
            </Card.Body>
     <Card.Footer>
      <small className="text-muted">Ratting: {ratting}</small>
     </Card.Footer>
    </Card>
    </CardGroup>
                </Col>
            </Row>
            </div>
        </div>
    );
};

export default Review;