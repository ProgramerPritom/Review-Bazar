import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useReviews from '../Hooks/useReviews';
import Review from '../Review/Review';
import './Home.css';


const Home = () => {
    const [reviews,setReviews] = useReviews();
    if(reviews.length > 3){
        reviews.splice(0,3);
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                <div className="col-md-8">
                    <div className="text-area">
                       <h2>Find Your Favourite Camera</h2>
                       <h3>Capture your Sweet Moment!</h3>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptatibus nostrum nemo possimus libero similique a obcaecati labore ad doloremque vero expedita aliquid, molestiae maiores laboriosam unde minus nesciunt quibusdam?</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="text-area-2">
                    <img className='Home-img' src={"https://i.pinimg.com/736x/a9/40/91/a940917889e70964a7a333390a7e8843.jpg"} alt="" />
                    </div>
                </div>
                
                </div>
            </div>
            <div className="container mt-4 mb-4">
                <div className="title-text">
                    <h1 className='text-center'>Lettest Customer Reviews({reviews.length})</h1>
                </div>
                <div className="card-area">
                    {
                        reviews.map(review => <Review key={review.id}
                        review = {review}
                        ></Review>)
                    }
                </div>
                <div className="see-all-btn text-center">
                    <Button variant="info"><Link className='see-btn' to="/reviews">See all Reviews</Link></Button>
                </div>
            </div>
        </div>
    );
};

export default Home;