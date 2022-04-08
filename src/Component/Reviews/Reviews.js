import React from 'react';
// import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import useReviews from '../Hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews,setReviews] = useReviews();
    return (
        <div>
            <div className="text-area">
                <h2 className='text-center'>See all Reviews</h2>
            </div>
            <div className="reviews-card-area">
                {
                    reviews.map(review => <Review
                    key={review.id}
                    review = {review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;